# Setup and development

## Install programs

The required programs are listed here. Please make sure each of the packages has been installed.

- `git` - clones the latest branch code from a remote repository.
- `nodejs` - provides the node environment
- `pm2` - web server for running NestJs persistently
- `redis` - temporary storage of temporary data, such as authentication codes
- `loki` - logging service
- `caddy` - reverse proxy web server for serving static files
- `mysql` - database
  > Unless for testing, we connect directly to a dedicated remote database for the production environment.  
  > *So a local installation is not generally necessary if you're running in the production.*

```bash
#!/bin/bash

# Update package list
sudo apt update -y

# nodejs
curl -1sLf https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install -y nodejs

# yarn
curl -1sLf https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn. list
sudo apt update && sudo apt-get install -y yarn

# pm2
sudo npm install -g pm2

# docker
sudo apt install -y docker.io

# git
sudo apt install -y git

# caddy
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo apt-key add -
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update && sudo apt install -y caddy
```

The above commands snippet doesn't include `loki`, `redis`, `nats`. This is because these can be installed with docker much easier.

The following commands are given to **install and start** these programs with docker.

```bash
# loki
## you can actually put the config files wherever you like
## but I'd prefer to create a config directory in /etc
sudo mkdir /etc/loki
cd /etc/loki
sudo wget https://raw.githubusercontent.com/grafana/loki/v2.4.2/cmd/loki/loki-local-config.yaml -O loki-config.yaml
sudo docker run -d --name loki -v $(pwd):/mnt/config -p 3100:3100 grafana/loki:2.4.2 -config.file=/mnt/config/loki-config.yaml
sudo wget https://raw.githubusercontent.com/grafana/loki/v2.4.2/clients/cmd/promtail/promtail-docker-config.yaml -O promtail-config. yaml
sudo docker run -d -v $(pwd):/mnt/config -v /var/log:/var/log --link loki grafana/promtail:2.4.2 -config.file=/mnt/config/promtail-config. yaml

# nats
sudo docker run -dp 4222:4222 nats:latest

# redis
sudo docker run -dp 6379:6379 redis
```

If the commands work, and you can make sure all the required programs are installed, you can start deploying the backend.

## Clone the repository

```bash
git clone https://github.com/w3itch-crafter/w3itch-backend
cd w3itch-backend

# If you're working on the testing branch, set the branch to `testing`
 git checkout testing

yarn # Install dependencies

sudo mkdir -p /var/log/w3itch-backend # make sure the log directory exists
```

## Modify the configurations

The configuration files are located in the `config` directory. 

```bash
# example configuration, you can rename it to
# your environment configuration file, and modify it to get started
config/config.example.yaml 

# development configuration
config/config.development.yaml 

# production configuration
config/config.production.yaml 

# JWT key pair for signing/verifying the login tokens
config/JWT_PRIVATE_KEY.pem
config/JWT_PUBLIC_KEY.pub
```

First you can generate the keys with the following command.

```bash
# Generate RSA Key for JWT signing and get RSA Public Key from the private key
$ yarn run keygen
```

Then depending on your environment, you can modify the configuration file.  
Our [`README.md`](https://github.com/w3itch-crafter/w3itch-backend/blob/main/README.md#configuration) also contains an example which has more information. You can refer to it to get started.

You also have to perform a `migration` operation on the database to update the database tables.

```bash
# Run all pending migrations
$ yarn typeorm migration:run
```


## Edit Caddyfile

You need to edit the `Caddyfile` to host the backend.

```bash
# /etc/caddy/Caddyfile
api.w3itch.io {
    encode zstd gzip
    header -Server
    
    route {
        file_server /downloads/* {
            root /var/easyrpg
        }
    }
    reverse_proxy localhost:3002
}
```

This configuration will serve the files in `/var/easyrpg` directory for the `/downloads` path. And it will proxy the other requests to the `localhost:3002`. You should change the port to the same as your backend port.

## Prepare the third party files

You should create a directory to store your EasyRPG files, like `/var/easyrpg`. It should contain the following files.

```bash
/var/easyrpg/
├── downloads
├── games
├── gencache
├── rtp
└── temp
```

- `downloads` - store the user uploaded files, it can be empty.
- `games` - store the EasyRPG games, it can be empty.
- `gencache` - store the `gencache` executable file, please [download it from here](https://github.com/EasyRPG/Tools/tree/master/gencache) and put it in `/var/easyrpg/gencache/bin`.
  ```bash
  /var/easyrpg/gencache/
  └── bin
      └── gencache
  ```

- `rtp` - store the EasyRPG RTP files, you can extract the [EasyRPG RTP](https://github.com/EasyRPG/RTP) project to this directory.
- `temp` - store the temporary files, it can be empty.

These files should also be located in the `w3itch-backend/thirdparty` directory. You can link them via the `ln` command:

```bash
ln -s /var/easyrpg/games ./thirdparty/games
ln -s /var/easyrpg/temp ./thirdparty/temp
ln -s /var/easyrpg/gencache ./thirdparty/gencache
ln -s /var/easyrpg/downloads ./thirdparty/downloads
## But don't link the `rtp` directory
## you should use the `cp` command instead:
cp -R /var/easyrpg/rtp ./thirdparty/rtp
```

The reason that we don't `ln` the rtp directory is to avoid below error when extracting a game.

```bash
Invalid src or dest: cp returned EINVAL (cannot copy /var/easyrpg/rtp to a subdirectory of self /var/easyrpg/rtp) /home/w3itch/w3itch-backend/thirdparty/temp/Scarmonde_VERSION_3/Scarmonde
```

## Start the backend

Please make sure all the files are linked correctly. Then you can start the backend with the following command.

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev


# production mode
$ yarn build

# start production mode
$ yarn start:prod

# start production mode via pm2
$ pm2 start npm --name "w3itch-backend" -- run start:prod --update-env
```
