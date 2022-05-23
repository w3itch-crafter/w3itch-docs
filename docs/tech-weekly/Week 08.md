---
tags: Tech Weekly
---
# Week 8 May 21， 2022


## What we are working on

- 🎉 W3itch V0.3.0 Released 🎉 
    - https://github.com/w3itch-crafter/w3itch-backend/releases/tag/v0.3.0
        - https://drone.w3itch.io/w3itch-crafter/w3itch-backend/58
        - Implemented Drone based promote/rollback

            - https://drone.w3itch.io/w3itch-crafter/w3itch-backend/51
            - https://drone.w3itch.io/w3itch-crafter/w3itch-backend/52
    - https://github.com/w3itch-crafter/w3itch-frontend/releases/tag/v0.3.0
    - 
- Soulbound
    - https://vitalik.ca/general/2022/01/26/soulbound.html
    - ![](https://i.imgur.com/qwHWXpx.png)
        - We provide open source tools that allow submitters to upload games and maintain various data links around them.
        - Submitters are not the same as authors, and we intend to rely on author claims and community consensus for game author/creator/co-creator certification, which will be reflected as Soulbound-tokens.
            
    - Non-tradable, so it can be used for authorship/ownership and membership confirmation
        - https://github.com/w3itch-crafter/w3itch-frontend/issues/141
            - > Build a reasonable donation or sponsorship model that benefits real authors. For example, connecting with communities and authors so that authors can claim authorship/ownership, etc.

- Minetest
    - > Minetest is a game engine for various games which usually play in an open world made out of cubes, inspired by Infiniminer, Minecraft, and the like. You can download games, mods and texture packs in Minetest or join a server. 
    - https://wiki.minetest.net/Main_Page
    - [Web port](https://github.com/paradust7/minetest/tree/webport)
    - Research on [Minetest WASM](https://github.com/paradust7/minetest-wasm)
- Game Jam
    - Aggregate related calendar events and provide data sources that can be subscribed to by various calendars. w3itch only subscribes to such data sources and provides a view
    - [Pleroma, LitePub, ActivityPub and JSON-LD](https://ariadne.space/2018/11/12/pleroma-litepub-activitypub-and-json-ld/)
    - iCal + JSON-LD
- [Our Gitea server](https://gitea.w3itch.io/) 


``` json
{
  "@context": {
    "ical": "http://www.w3.org/2002/12/cal/ical#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "ical:dtstart": {
      "@type": "xsd:dateTime"
    }
  },
  "ical:summary": "Alice's Game Jam",
  "ical:location": "Cyber space",
  "ical:dtstart": "2022-05-21T20:00:00Z"
}
```

## Next

- Minetest
- Game Jam

