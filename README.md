# Mulot.prof

Site de cours et de travaux pratiques en SNT et NSI.

## Base technique

| Outil                                      | Rôle                                                     |
| :----------------------------------------- | :------------------------------------------------------- |
| [Astro](https://docs.astro.build)          | Générateur de site statique                              |
| [Starlight](https://starlight.astro.build) | Thème de documentation (navigation, recherche, sommaire) |
| [Tailwind CSS](https://tailwindcss.com)    | Classes utilitaires CSS                                  |

### Plugins Starlight

- [starlight-sidebar-topics](https://github.com/HiDeoo/starlight-sidebar-topics) : gestion des menus séparés SNT / NSI
- [starlight-quiz](https://ewels.github.io/starlight-quiz) : questionnaires
- [starlight-kbd](https://github.com/HiDeoo/starlight-kbd) : raccourcis clavier selon le système
- [starlight-codeblocks](https://ewels.github.io/starlight-codeblocks/) : blocs de code enrichis
- [starlight-image-zoom](https://starlight-image-zoom.vercel.app) : agrandissement des images au clic

### Autres dépendances

- [LiveCodes](https://livecodes.io) : base technique des éditeurs de code interactifs

### Organisation des fichiers

```
.
├── public/                  Fichiers servis tels quels (ex. : fichiers à télécharger)
├── src/
│   ├── assets/images/       Images
│   ├── components/          Composants utilisables
│   │   └── starlight/       Composants remplaçant ceux de Starlight
│   ├── config/
│   │   ├── plugins.mjs      Configuration des plugins
│   │   └── sidebar/         Configuration de la navigation
│   ├── content/docs/        Pages du site
│   ├── styles/global.css    Styles globaux
│   └── content.config.ts    Schéma des en-têtes des pages
└── astro.config.mjs         Configuration Astro / Starlight
```

Des alias d'import sont définis dans le fichier `tsconfig.json` :

- `@/` pointe vers `src/`
- `@components/` pointe vers `src/components/`

### Composants maison

| Composant               | Rôle                                                                        |
| :---------------------- | :-------------------------------------------------------------------------- |
| `Link`                  | Lien externe                                                                |
| `Video`                 | Vidéo intégrée                                                              |
| `Playground`            | Éditeur HTML/CSS interactif (LiveCodes)                                     |
| `Checklist`             | Encadré vert « Ai-je bien compris ? » où l'élève coche ce qu'il a compris   |
| `AppLink`               | Bouton d'accès à une application en ligne (CapyCode…), à ses couleurs       |
| `Callout`               | Encadré façon `Aside`, avec types supplémentaires, icônes Tabler, repliable |
| `starlight/PageSidebar` | Colonne de droite avec la liste des étapes (pages avec `etapes: true`)      |

Chaque composant est documenté, avec des exemples d'utilisation, dans `src/content/docs/components/`.
Ces pages sont des brouillons (`draft: true`) : elles ne sont visibles qu'en développement,
sur <http://localhost:4321/components/>, et ne sont pas publiées.

## Développement

Toutes les commandes se lancent depuis la racine du projet.

| Commande            | Action                                                        |
| :------------------ | :------------------------------------------------------------ |
| `pnpm install`      | Installe les dépendances                                      |
| `pnpm dev`          | Lance le serveur de développement sur <http://localhost:4321> |
| `pnpm dev --force`  | Idem, en reconstruisant le cache des dépendances de Vite      |
| `pnpm build`        | Construit le site de production dans `dist/`                  |
| `pnpm preview`      | Affiche localement le site construit, avant sa mise en ligne  |
| `pnpm astro check`  | Vérifie les erreurs de types dans le projet                   |
| `pnpm format`       | Met en forme tous les fichiers avec Prettier                  |
| `pnpm format:check` | Vérifie la mise en forme sans modifier les fichiers           |

> [!TIP]
> Si un composant ne fonctionne plus en développement (par exemple le `Playground`) sans erreur visible,
> le cache des dépendances de Vite est sans doute périmé : arrêtez le serveur puis relancez-le avec `pnpm dev --force`.
> Évitez aussi de lancer `pnpm build` pendant que `pnpm dev` tourne.

## Mise à jour

| Commande                    | Action                                                        |
| :-------------------------- | :------------------------------------------------------------ |
| `pnpm outdated`             | Liste les dépendances ayant une nouvelle version              |
| `pnpm dlx @astrojs/upgrade` | Met à jour Astro, Starlight et les intégrations officielles   |
| `pnpm update`               | Met à jour les dépendances dans les limites de `package.json` |
| `pnpm update --latest`      | Met à jour vers les dernières versions, y compris majeures    |

## Ressources

- [Documentation Starlight](https://starlight.astro.build/)
- [Documentation Astro](https://docs.astro.build)
- [Composants Starlight](https://starlight.astro.build/components/using-components/)
- [Astro Icon](https://www.astroicon.dev/)
- [Starlight Markdown Blocks](https://delucis.github.io/starlight-markdown-blocks/)
