// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import starlightSidebarTopics from "starlight-sidebar-topics";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Mulot.prof",
      customCss: ["./src/styles/global.css"],
      locales: {
        root: {
          label: "Français",
          lang: "fr-FR",
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
