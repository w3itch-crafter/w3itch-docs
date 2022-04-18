import getSidebar from "./getSidebar";
import { defineUserConfig } from "@vuepress/cli";
import type { DefaultThemeOptions } from "@vuepress/theme-default";
import * as path from "path";

export default defineUserConfig<DefaultThemeOptions>({
  lang: "en-US",
  title: "W3itch",
  description:
    "A Next-Generation Open Free Market for Independent Digital Creators",
  head: [["meta", { name: "referrer", content: "no-referrer" }]],
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
          children: [
            "/README.md",
            "/faq.md",
            {
              text: "Contributing",
              link: "/CONTRIBUTING.md",
            },
            "/thanks.md",
            "/support.md",
          ],
        },
      ],

      "/tech-weekly/": getSidebar(path.join(__dirname, "..", "/tech-weekly")),
    },
    logo: "https://storageapi2.fleek.co/7f744516-e377-496b-9ab1-4429f50e6a43-bucket/w3itch-logo-2.jpg",
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
});
