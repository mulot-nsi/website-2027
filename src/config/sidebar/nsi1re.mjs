export const nsi1reTopic = {
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
};
