// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightQuiz from "starlight-quiz";

import { sidebarTopics } from "./src/config/sidebar/index.mjs";

// https://astro.build/config
export default defineConfig({
  site: 'https://2027.mulot.prof',
  integrations: [
    starlight({
      title: "Mulot.prof",
      customCss: ["./src/styles/global.css"],
      defaultLocale: "root",
      locales: {
        root: {
          label: "Français",
          lang: "fr",
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/mulot-nsi/website-2027",
        },
      ],
      plugins: [
        starlightQuiz({
          quizDefaults: {
            autoNumber: false,
          },
        }),
        starlightSidebarTopics(sidebarTopics),
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
