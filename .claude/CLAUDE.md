# CLAUDE.md

Site de cours SNT / NSI construit avec Astro et Starlight. Voir le [README](../README.md) pour la base technique, l'organisation des fichiers et les commandes.

## Conventions

- Utiliser `pnpm` / `pnpm exec`, jamais `npm` / `npx`.
- Tous les fichiers, y compris les `.mdx`, sont formatés par Prettier : vérifier avec `pnpm format:check`.
- Contenu, commentaires et messages de commit en français. Les messages de commit commencent par un verbe au présent (ex. : « Ajoute… », « Corrige… »).

## Migration

- Le contenu est converti depuis l'ancien site, construit avec Material for MkDocs, vers Starlight.
- Faire simple : n'utiliser que les fonctionnalités de Starlight, les plugins installés et les composants maison existants (voir le README). Ne pas créer de nouveau composant ni ajouter d'extension.

## Git

- Les commits sont au nom de l'utilisateur (identité git locale), sans co-auteur.
- Messages en français, verbe au présent en tête : « Ajoute une activité pratique », « Corrige un énoncé ».
