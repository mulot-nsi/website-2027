// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightQuiz from 'starlight-quiz';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Mulot.prof",
      customCss: ["./src/styles/global.css"],
      defaultLocale: 'root',
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
        starlightSidebarTopics([
          {
            label: "Seconde",
            link: "/snt/",
            icon: "open-book",
            items: [
              {
                label: "Internet",
                items: [
                  { label: "Introduction", slug: "snt/internet" },
                  {
                    label: "Simulation d'un réseau",
                    collapsed: true,
                    items: [
                      "snt/internet/simulation-reseau",
                      "snt/internet/simulation-reseau/consignes",
                      "snt/internet/simulation-reseau/bilan",
                    ],
                  },
                  { label: "Annuaire d'Internet", slug: "snt/internet/dns" }
                ],
              },
            ],
          },
          {
            label: "Première",
            link: "/nsi1re/",
            icon: "open-book",
            items: [
              {
                label: "Bases de programmation",
                items: [
                  {
                    autogenerate: {
                      directory: "nsi1re/programmation",
                    },
                  },
                ],
              },

              {
                label: "Projets",
                items: [
                  {
                    label: "Présentez-vous",
                    items: [
                      {
                        autogenerate: {
                          directory: "nsi1re/projets/presentez-vous",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ]),
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
