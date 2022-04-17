---
tags: Guide
---
# FAQ

[![hackmd-github-sync-badge](https://hackmd.io/_GdOYtneRJuwod70xTX5gQ/badge)](https://hackmd.io/_GdOYtneRJuwod70xTX5gQ)



1. Resource not found error

Possible causes of this problem:

- RTP

 Resources in the RTP will not be found now.
 We plan to supplement RTP resources based on [RTP replacement](https://easyrpg.org/rtp-replacement/)

- Charset

Your game resources is encoded in [Shift_JIS](https://en.wikipedia.org/wiki/Shift_JIS).
You can try modifying the chaset when you create the game project.

![](https://i.imgur.com/LIftSzQ.png)


- GenCache

We use [EasyRPG GENCACHE](https://easyrpg.org/tools/) tool to make JSON cache file needed by web Player games. We have confirmed that sometimes the wrong file entries are indexed: https://backend-api.testenv.w3itch.io/games/Helen_i18n/index.json
![](https://i.imgur.com/nbWDmCG.png),`PIC_Battle_Property1.png` should be indexed， not `PIC_Battle_Property1`.
If you encounter this problem, you can first generate the `index.json` file locally,
![](https://i.imgur.com/SjXltzy.png)
fix incorrect indexes manually (if they exist)，
then compress it into a zip file with the other game resources and upload it.


----

[![hackmd-github-sync-badge](https://hackmd.io/_GdOYtneRJuwod70xTX5gQ/badge)](https://hackmd.io/_GdOYtneRJuwod70xTX5gQ)
