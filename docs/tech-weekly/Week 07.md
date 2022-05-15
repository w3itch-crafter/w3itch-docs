---
tags: Tech Weekly
---
# Week 7 - May 13, 2022


## What we are working on

- Discord Integration
    - Register / Login with Discord
        - ![](https://i.imgur.com/2I9LXPG.png)
        - We will try to integrate some games with discord accounts.
    - Research on [Fosscord](https://fosscord.com/)
        - > Fosscord is a free and open source program compatible with Discord. It's an in development chat, voice and video platform similar to Slack and Rocket.chat.
        - These are also the direction w3itchio is working on
            - Configurable
            - Selfhostable
            - Decentralized
            - Free & Open Source
            - Encryption
            - Security
            - Privacy
        - Discord compatibilable
            - Many gaming communities will have their own Discord Server
            - Users get used to the Discord style experience
            - Although most users do not feel it, Discord is a private service, the basic control of the community is actually in the hands of Discord, not in the hands of the community members.
            - We think it's good to have a relatively smooth migration solution rather than a rush when the day comes.
       
        

- Account Binding
    - You can now bind your accounts on other platforms to your w3itchio account
    - ![](https://i.imgur.com/g5UYH90.png)
    - Although we ask whether the user is a player or a creator when registering, there's really not much practical use for it yet.
    - Considering the services that players and creators may use, we first provide the GitHub account binding feature commonly used by developers and the Discord account binding feature commonly used by the gaming community
    - If you are a developer, you can now try our [Drone](https://drone.w3itch.io/) service. If you think it's a good idea to push game updates to w3itch.io with Drone (yes, like the preview feature provided by [Vercel](https://vercel.com/)), feel free to contact us!

- Search
    - The SEO results were not too good and we found that we were confusing the need to search in site with the need to retrieve us through Google.
    - For example, some API-based solutions that are not conducive to google crawling, but are well suited for in-site search usecase
        - We now try to use [Algolia](https://www.algolia.com/) for in-site search
        - In addition, [JSON-LD](https://json-ld.org/) has been added for Google to crawl.
            - > Data is messy and disconnected. JSON-LD organizes and connects it, creating a better Web.
            - In the long run, this is not only for crawling, but also helps build connections between data. Migrate game, material, creator, player and community data out of walled gardens and provide deposition solutions
            
- About JSON-LD
    - Not many people may know that, in fact, if you view source of itch.io's games, you'll find this data
    
    ``` json 
    // from https://tuyoki.itch.io/soulbeacon
    {"@context":"http:\/\/schema.org\/","aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","ratingCount":155},"@type":"Product","description":"A small comic being updated leisurely","name":"Soul Beacon of the Netherworld"}
    ```
    

   - The data is organized according to the json-ld standard, not the schema defined internally by itch.io, is human-friendly, and can be shared anywhere, including saved as offline data. 
   - The downside is that if itch.io shuts down, the data will be inaccessible as well. If the community had a convenient mechanism to crawl the parts they are interested in, build data networks and aggregate feeds based on technologies like IPFS/Arweave, the data would not disappear from the Internet even if individual gateways were out of service.

    
## Next

- Soulbound
    - https://vitalik.ca/general/2022/01/26/soulbound.html
- Make w3itch account available for ynoserver
    - https://github.com/w3itch-crafter/w3itch-frontend/issues/160

