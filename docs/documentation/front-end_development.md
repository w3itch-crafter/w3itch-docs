# Setup and development

[toc]

## First-time setup

Make sure you have the following installed:

- [Node](https://nodejs.org/en/) (at least the latest LTS)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/) (at least 1.0)

## Installation

```bash
# Install dependencies from package.json
yarn install
```

> Note: don't delete yarn.lock before installation, See more [in yarn docs](https://classic.yarnpkg.com/en/docs/yarn-lock/)

## Edit Environment Variable

Rename `.env.local.example` to `.env.local` or `.env` and fill all env value.

For more infomation, you can see Next.js [Environment Variables](https://nextjs.org/docs/basic-features/environment-variables) ducument.

```env
# PUBLIC url
NEXT_PUBLIC_URL=https://test.w3itch.io
# API URL
NEXT_PUBLIC_API_URL=https://backend-api.testenv.w3itch.io
# ADDRESS MINETEST
NEXT_PUBLIC_ADDRESS_MINETEST_URL=api.w3itch.io
# MINETEST PORT
NEXT_PUBLIC_MINETEST_PORT=30000
# Support multiple chain id, split by comma e.g: 1,4,56,97
NEXT_PUBLIC_CHAIN_ID=1,3,4,5,42,56,97

# Your Infura api key
NEXT_PUBLIC_INFURA_API_KEY=
NEXT_PUBLIC_INFURA_API_SECRET=

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=

# Algolia
NEXT_PUBLIC_ALGOLIA_INDEX=
NEXT_PUBLIC_ALGOLIA_APP_ID=
NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY=
ALGOLIA_SEARCH_ADMIN_KEY=
```

**Required**

> Run the `dev` or `build` commands, we will check if the environment variable exists

- `NEXT_PUBLIC_URL`
- `NEXT_PUBLIC_API_URL`
- `NEXT_PUBLIC_ADDRESS_MINETEST_URL`
- `NEXT_PUBLIC_MINETEST_PORT`
- `NEXT_PUBLIC_CHAIN_ID`
- `NEXT_PUBLIC_INFURA_API_KEY`

**Optional**

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` If you need Google Analytics.
- `NEXT_PUBLIC_ALGOLIA_*, ALGOLIA_*` If you need Algolia search, default is Google search.

For more infomation, you can see

- [infura](https://infura.io/).
- [google analytics](https://analytics.google.com/).
- [algolia](https://www.algolia.com/).

## Dev server

```bash
# Launch the dev server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Test

- [next testing](https://nextjs.org/docs/testing)
- [jest](https://jestjs.io/zh-Hans/)

```bash
yarn test

yarn test:ci
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy on the server

```bash
yarn build

yarn start
```

Then, run next build to build your application. Finally, run next start to start the Node.js server. This server supports all features of Next.js.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
