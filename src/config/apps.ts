// Applications en ligne utilisées en classe, affichées par le composant
// <AppLink>. Chaque application reprend son nom, son icône et ses couleurs
// officiels pour être facilement identifiable par les élèves.
//
// Pour ajouter une application :
//   1. placer son icône (SVG ou PNG) dans src/assets/apps/ ;
//   2. ajouter une entrée ci-dessous (la clé sert de valeur à la prop `app`).
import type { ImageMetadata } from "astro";
import capycode from "@/assets/apps/capycode.svg";

interface App {
  /** Nom officiel de l'application. */
  name: string;
  /** Adresse de l'application. */
  url: string;
  /** Icône (logo) de l'application. */
  icon: ImageMetadata;
  /** Couleur de fond du bouton. */
  background: string;
  /** Couleur du texte du bouton. */
  color: string;
  /** Couleur de la bordure au survol. */
  accent: string;
}

export const apps = {
  capycode: {
    name: "CapyCode",
    url: "https://vscapytale2.ac-paris.fr/p/capycode/",
    icon: capycode,
    background: "#1e1e1e",
    color: "#ffffff",
    accent: "#007acc",
  },
} satisfies Record<string, App>;

export type AppId = keyof typeof apps;
