// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import starlightSidebarTopics from "starlight-sidebar-topics";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Mulot NSI",
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
					href: "https://github.com/withastro/starlight",
				},
			],
			plugins: [
				starlightSidebarTopics([
					{
						label: "Seconde",
						link: "/snt/",
						icon: "open-book",
						items: [{ label: "Internet", link: "/snt/internet/" }],
					},
					{
						label: "Première",
						link: "/nsi1re/",
						icon: "open-book",
						items: [
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

			/*
            sidebar: [
                {
                    label: "Guides",
                    items: [
                        // Each item here is one entry in the navigation menu.
                        {label: "Example Guide", slug: "guides/example"},
                    ],
                },
                {
                    label: "Reference",
                    items: [{autogenerate: {directory: "reference"}}],
                },
            ],*/
		}),
	],

	vite: {
		plugins: [tailwindcss()],
	},
});
