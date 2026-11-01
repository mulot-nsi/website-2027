# CLAUDE.md

Site de cours SNT / NSI construit avec Astro et Starlight. Voir le [README](../README.md) pour la base technique, l'organisation des fichiers et les commandes.

## Conventions

- Utiliser `pnpm` / `pnpm exec`, jamais `npm` / `npx`.
- Tous les fichiers, y compris les `.mdx`, sont formatés par Prettier : vérifier avec `pnpm format:check`.
- Contenu, commentaires et messages de commit en français. Les messages de commit commencent par un verbe au présent (ex. : « Ajoute… », « Corrige… »).

## Migration

- Le contenu est converti depuis l'ancien site, construit avec Material for MkDocs, vers Starlight.
- La migration se fait en deux temps :
  1. **Migration fidèle** (en cours) : reproduire le contenu au plus près de l'original, en n'utilisant que les fonctionnalités de Starlight, les plugins installés et les composants maison existants (voir le README). Ne pas créer de nouveau composant ni ajouter d'extension.
  2. **Évolutions** (plus tard) : une fois les contenus migrés, l'utilisateur décidera au cas par cas s'il adapte les contenus ou fait évoluer la plateforme (nouveaux composants, extensions, styles).
- Lorsqu'un élément de l'ancien site n'a pas d'équivalent direct, choisir l'équivalent existant le plus proche et le signaler, plutôt que de créer une solution sur mesure.

## Git

- Les commits sont au nom de l'utilisateur (identité git locale), sans co-auteur.
- Messages en français, verbe au présent en tête : « Ajoute une activité pratique », « Corrige un énoncé ».
