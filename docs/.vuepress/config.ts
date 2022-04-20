import getSidebar from "./getSidebar";
import { defineUserConfig } from "@vuepress/cli";
import type { DefaultThemeOptions } from "@vuepress/theme-default";
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
      "/CONTRIBUTING.html": contributingSidebar,
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
  ],
});
