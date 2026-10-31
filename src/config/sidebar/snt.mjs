const internet = {
  label: "Internet",
  items: [{ autogenerate: { directory: "snt/internet" } }],
};

const web = {
  label: "Le web",
  items: [{ autogenerate: { directory: "snt/web" } }],
};

export const sntTopic = {
  label: "Seconde",
  link: "/snt/",
  icon: "open-book",
  items: [internet, web],
};
