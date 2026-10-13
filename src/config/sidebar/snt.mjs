const internet = {
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
    { label: "Annuaire d'Internet", slug: "snt/internet/dns" },
  ],
};

const web = {
  label: "Le web",
  items: [
    { slug: "snt/web" },
    {
      label: "Le langage HTML",
      collapsed: false,
      items: [{ autogenerate: { directory: "snt/web/langage-html" } }],
    },
  ],
};

export const sntTopic = {
  label: "Seconde",
  link: "/snt/",
  icon: "open-book",
  items: [internet, web],
};
