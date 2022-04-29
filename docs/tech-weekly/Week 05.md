---
tags: Tech Weekly
---
# Week 5 April 29, 2022

[W3itch Weekly Telegraph Ep.2 —— EasyRPG](https://blog.w3itch.io/2022/04/29/W3itch-Weekly-Telegraph-Ep-2/)


## What we are working on

- 🎉 W3itch V0.2.0 Released 🎉
    - https://github.com/w3itch-crafter/w3itch-backend/releases/tag/v0.2.0
    - https://github.com/w3itch-crafter/w3itch-frontend/releases/tag/v0.2.0
- Give up direct access to [Fleek](https://fleek.co/)，for better uploading experience. 
    - We use [Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html) now.
        - Yes, it's not a Web3 technology, but until we find a better decentralized storage and CDN solution, we're "backing off" here for a better upload experience.
    - But that doesn't mean we've given up on exploring decentralized storage. We will try to use [Arweave](https://www.arweave.org/) to meet the needs of those who want their games and materials to be stored permanently.
    - In fact, it is not necessary to go through our server to do this. Creators can try [ArDrive](https://ardrive.io/) to upload game resources.
        - We will then try to build services to index and cache these resources to make them available to w3itch.io.
    - The way Web3 works is that you don't need to **trust** the service, you should **verify** every part of the service.
    -  So we embrace open source and blockchain.

## Next

- [Vote: Dev Route Selection](https://discord.gg/xeymBbMrBG)
    - More Web2 perks or Web3 perks?
- Account binding
    - We spent extra time on storage issues this week, so this issue was postponed.
    - Main impact: GitHub registered users have to bind their wallets to get token to unlock some games.
- Auto-detect encoding of game files
    - We encountered resources whose zip package charset and file charset did not match, and where multiple encodings of the files existed at the same time. This problem is more complex than we expected.
    - This may require the creator to also follow some sort of convention and try to package the game in UTF-8.

