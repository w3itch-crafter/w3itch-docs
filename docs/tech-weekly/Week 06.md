---
tags: Tech Weekly
---
# Week 6 - May 6, 2022


## What we are working on

- Search
    - Add integrated google search to our website
    - We use [Google Search Console](https://search.google.com/search-console/about) to improve our performance on google search
- Ynoproject Demo
    - https://ynoproject.testenv.w3itch.io/
    - [How to set up Ynoproject with forest-orb on your server](https://hackmd.io/0iqmvleUT4W1V5T5bM2WJg)
- CI/CD
    - Now we use [Drone](https://www.drone.io/) to build,test and release `w3itch-backend`
   
    - > Drone by Harness™ is a modern Continuous Integration platform that empowers busy teams to automate their build, test and release workflows using a powerful, cloud native pipeline engine.
    - [Visit our Drone platform](https://drone.w3itch.io/)
- Auto-detect encoding of game files
   
    - Some game packages contain diverse file encodings, and the logic of automatic detection does not work well, so it is better to guide the creators to handle the uploaded packages themselves.
    - For the sake of efficiency the sampling method was used , and it is possible to miss files with different encodings if they exist. And if judging the encoding of each file is not necessary for most games. In case of new games, it is recommended to use the resources suggested by EasyRPG Project to unify file naming and encoding.

## Next

- Discord Integration
    - Register / Login with Discord
    - Channel<->chatroom
    - Discord account->W3itch account->Ynoproject server account
- Account binding
    - We spent extra time on storage issues this week, so this issue was postponed.
    - Main impact: GitHub registered users have to bind their wallets to get token to unlock some games.
