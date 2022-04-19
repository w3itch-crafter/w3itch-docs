---
tags: Contributing
---

# Welcome to W3itch contributing guide

[![hackmd-github-sync-badge](https://hackmd.io/6ebq7ZrRSn21fqk8f4DJkg/badge)](https://hackmd.io/6ebq7ZrRSn21fqk8f4DJkg)

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to W3itch and its packages, which are hosted in the [W3itch Crafter](https://github.com/w3itch-crafter) on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

[TOC]

## Code of Conduct

This project and everyone participating in it is governed by the [W3itch Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [team@w3itch.io](mailto:team@w3itch.io).

## Join the discussion

> Note: Please don't file an issue to ask a question. You'll get faster results by using the resources below.

- [Discord](https://discord.gg/9eytfsyKPG)
- [FAQ](faq.md)

## How Can I Contribute?

### Test preview versions

We use [vercel](https://vercel.com) to build and deploy frontend.
[Preview versions](https://github.com/w3itch-crafter/w3itch-frontend/deployments/activity_log?environment=Preview)

You can click "view deloyment" and check if issues labeled "testing" are fixed in the latest version.

### Collaborate on HackMD

- [Home](https://hackmd.io/@w3itch-crafter)
  - [FAQ](https://hackmd.io/_GdOYtneRJuwod70xTX5gQ)

### Report Issues

See [Support](./support.md)

### Your First Code Contribution

Unsure where to begin contributing to W3itch? You can start by looking through these `good first issue` and `help wanted` issues:

- [Good First issue](https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aw3itch-crafter++sort%3Acomments-desc++label%3A%22good+first+issue%22) - issues which should only require a few lines of code, and a test or two.
- [Help wanted issue](https://github.com/search?q=is%3Aopen+is%3Aissue+user%3Aw3itch-crafter++sort%3Acomments-desc++label%3A%22help+wanted%22) - issues which should be a bit more involved than `good first issue` issues.

Both issue lists are sorted by total number of comments. While not perfect, number of comments is a reasonable proxy for impact a given change will have.

### Create pull requests

The process described here has several goals:

- Maintain W3itch's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible W3itch
- Enable a sustainable system for W3itch's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow instructions in [the template](./PULL_REQUEST_TEMPLATE.md)
2. Follow the [styleguides](#Styleguides)
3. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing

<details>
    <summary>
        What if the status checks are failing?
    </summary>
    If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.
</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

### Repos

- [w3itch-frontend](https://github.com/w3itch-crafter/w3itch-frontend/pulls)
  - [fork](https://github.com/w3itch-crafter/w3itch-frontend/fork)
- [w3itch-backend](https://github.com/w3itch-crafter/w3itch-backend/pulls)
  - [fork](https://github.com/w3itch-crafter/w3itch-backend/fork)

Both repos can be forked and developed locally.
If you are not sure how to get started，see `README.md` in each repo.

[Next.js](https://nextjs.org/) + [NestJS](https://nestjs.com/)

## Styleguides

### Git Commit Messages

All Git Commit messages are linted with [commitlint](https://commitlint.js.org/#/).

Concept: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### TypeScript Styleguide

All TypeScript code is linted with [ESLint](https://eslint.org/) &[Prettier](https://prettier.io/).
