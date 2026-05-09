# CV Personnel Interactif - Dounya Elarrac

Projet individuel du module Programmation Web 2.

## Technologies utilisees

- HTML5 pour la structure semantique
- CSS3 pour le style, Flexbox/Grid et le responsive design
- jQuery pour les animations, l'accordeon, le menu mobile et la validation du formulaire
- ReactJS pour les composants dynamiques avec props
- GitHub Pages pour le deploiement

## Sections du CV

- En-tete avec photo, nom, titre et coordonnees
- A propos
- Competences avec barres de progression animees
- Formation sous forme d'accordeon interactif
- Experiences et projets avec le composant React `ProjectCard`
- Contact avec formulaire valide en jQuery

## Composants React

- `SkillCard`
- `SkillsList`
- `ProjectCard`
- `ProjectsList`
- `ContactForm`

## Animation du fond

J'ai utilise quelques notions avancees en JavaScript et CSS pour ameliorer
l'animation du fond. Par exemple, j'ai utilise les variables CSS (`--mouse-x`,
`--stars-x`) pour transmettre la position de la souris au style, `dataset` pour
donner une profondeur differente a chaque particule, `getBoundingClientRect()`
pour calculer la position de la souris dans le header, et `forEach` pour
deplacer toutes les particules. Le code a ete adapte specialement pour mon CV
afin d'obtenir un mouvement fluide et personnalise.

## Deploiement

Le projet peut etre publie sur GitHub Pages dans un depot nomme :

```text
DOUNYA12222.github.io
```

URL finale :

```text
https://DOUNYA12222.github.io
```
