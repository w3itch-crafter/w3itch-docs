---
tags: Tech Weekly
---
# Week 10 June 4, 2022


## What we are working on

- 🎉 W3itch V0.4.1 Released 🎉 
    - [Back-end](https://github.com/w3itch-crafter/w3itch-backend/releases/tag/v0.4.1)
    - [Front-end](https://github.com/w3itch-crafter/w3itch-frontend/releases/tag/v0.4.1)
    - Support Minetest Player
        - Based on [Minetest WASM](https://github.com/paradust7/minetest-wasm)
        - All you need to do is upload `world.zip` and the w3itch server will automatically assign a port and start a mintest server
        - Currently supported gameid list:
            - minetest
            - prang
                - https://content.minetest.net/packages/luk3yx/prang/
            - mineclone2
                - https://content.minetest.net/packages/Wuzzy/mineclone2/
    - Dark Mode
    - Calendar `https://api.w3itch.io/calendar/cal.ics`

## Next

- Metamask integration
    - https://github.com/w3itch-crafter/w3itch-frontend/issues/219
- Auto register when OAuth login failed

