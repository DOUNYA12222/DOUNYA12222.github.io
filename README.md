# CV Personnel Interactif - Dounya Elarrac

Projet individuel du module Programmation Web 2.

## Technologies utilisees

- HTML5 pour la structure semantique
- CSS3 pour le style, Flexbox/Grid et le responsive design
- jQuery pour les animations, l'accordeon, le menu mobile et la validation du formulaire
- GitHub Pages pour le deploiement

## Sections du CV

- En-tete avec photo, nom, titre et coordonnees
- A propos
- Competences avec barres de progression animees
- Formation sous forme d'accordeon interactif
- Experiences et projets visibles directement dans la page
- Contact avec formulaire valide en jQuery
- Envoi du formulaire contact par API securisee avec SMTP

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

## Configuration SMTP pour le formulaire

Pour envoyer les messages du formulaire, il faut publier le site sur Vercel ou
un hebergement qui supporte les fonctions serverless. Le mot de passe SMTP ne
doit jamais etre mis dans `script.js` ou `index.html`.

Variables d'environnement a ajouter dans Vercel :

```text
SMTP_USER=votre-email@gmail.com
SMTP_PASS=votre-mot-de-passe-application
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
CONTACT_TO=d.elarrac4013@uca.ac.ma
```

`CONTACT_TO` est optionnel si vous voulez recevoir les messages sur le meme
email que `SMTP_USER`.
