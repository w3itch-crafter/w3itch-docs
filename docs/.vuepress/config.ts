import getSidebar from "./getSidebar";
import { defineUserConfig } from "@vuepress/cli";
import type { DefaultThemeOptions } from "@vuepress/theme-default";
const { tocPlugin } = require('@vuepress/plugin-toc')
import * as path from "path";

const contributingSidebar = [
  {
    text: "Contributing",
    collapsible: true,
    link: "/CONTRIBUTING.md",
    children: ["/CODE_OF_CONDUCT.md", "/PULL_REQUEST_TEMPLATE.md"],
  },
];
export default defineUserConfig<DefaultThemeOptions>({
  lang: "en-US",
  title: "W3itch",
  description:
    "A Next-Generation Open Free Market for Independent Digital Creators",
  head: [
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    [
      "link",
      { rel: "authorization_endpoint", href: "https://indieauth.com/auth" },
    ],
    [
      "link",
      { rel: "token_endpoint", href: "https://tokens.indieauth.com/token" },
    ],

    ["link", { rel: "me", href: "https://twitter.com/w3itchio" }],
    ["link", { rel: "me", href: "https://github.com/w3itch" }],
    ["link", { rel: "pgpkey", href: "/key.txt" }],
    ["meta", { name: "referrer", content: "no-referrer" }],
  ],
  // theme and its config
  theme: "@vuepress/theme-default",
  themeConfig: {
    navbar: [
      {
        text: "Guide",
        link: "/",
      },
      {
        text: "Tech Weekly",
        link: "/tech-weekly/",
      },
      {
        text: "Contributing",
        link: "/CONTRIBUTING.md",
      },
      {
        text: "Documentation",
        link: "/documentation/",
      },
      {
        text: "Blog",
        link: "/blog/",
      },
      {
        text: "GitHub",
        link: "https://github.com/w3itch-crafter",
      },
    ],
    sidebar: {
      "/": [
        {
          text: "Guide",
          collapsible: true,
          link: "/README.md",
          children: ["/README.md", "/faq.md", "/thanks.md", "/support.md"],
        },
      ],

      "/tech-weekly/": getSidebar(path.join(__dirname, "..", "/tech-weekly")),
      "/blog/": getSidebar(path.join(__dirname, "..", "/blog")),
      "/CONTRIBUTING.html": contributingSidebar,
      "/documentation/":[
        {
          text: "Front-end development",
          collapsible: true,
          link: "/documentation/front-end_development.md",
          children: ["/documentation/front-end_development.md", "/documentation/front-end_architecture.md"],
        },
        {
          text: "Back-end development",
          collapsible: true,
          link: "/documentation/back-end_development.md",
          children: ["/documentation/back-end_development.md"],
        },
        {
          text: "How to",
          collapsible: true,
          link: "/documentation/howto.md",
          children: ["/documentation/howto.md"],
        },
      ],
      "/CODE_OF_CONDUCT.html": contributingSidebar,
      "/PULL_REQUEST_TEMPLATE.html": contributingSidebar,
    },
  },
  markdown: {
    toc: {
      pattern: /^\[toc]$/i,
    },
  },
  extendsMarkdown: (md) => {
    // use more markdown-it plugins!
    md.use(require("markdown-it-task-lists"));
  },
  plugins: [
    [
      "@vuepress/pwa",
      {
        skipWaiting: true,
      },
    ],
    [
      "@vuepress/plugin-pwa-popup",
      {
        locales: {
          "/": {
            message: "New content is available.",
            buttonText: "Refresh",
          },
        },
      },
    ],
    tocPlugin({
      // options
    }),
  ],
});
