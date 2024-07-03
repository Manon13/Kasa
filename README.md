# Kasa - Refonte du site de location d'appartements

Bienvenue dans le projet de refonte du site Kasa, une entreprise leader en France dans la location d'appartements entre particuliers. Cette refonte vise à moderniser le site en utilisant une stack complète JavaScript, avec NodeJS pour le back-end et React pour le front-end.

## Description du projet

Kasa propose plus de 500 annonces de location d'appartements chaque jour. L'objectif est de créer une nouvelle version du site qui soit à la fois moderne et réactive, tout en suivant les maquettes Figma fournies. Le projet comprend le développement des composants React, l'intégration de React Router pour la gestion des routes, et l'utilisation d'icônes Font Awesome.

## Prérequis
Avant de commencer, assurez-vous d'avoir installé les éléments suivants:
* Node.js

## Technologies Utilisées
* React
* React Router
* Vite
* Sass
* Font Awesome

## Installation et Configuration
### Étape 1: Initialisation du Projet
Installation de Vite: 
`npm create vite@latest`

Installation des dépendances: 
`npm install`

Lancer l'application: 
`npm run dev`

### Étape 2: Installation de React Router 
Installation de React Router:
`npm install react-router-dom`

Configuration du routage de l'application dans le fichier Router.jsx

### Étape 3: Installation de Sass
Installation de SASS avec:
`npm install sass`

Création de fichier .sass pour chaque composant React

### Étape 4: Installation de Font Awesome
Installation des paquets nécessaires pour utiliser les îcones Font Awesome: 
`npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome`

Exemple d'utilisation d'icones pour Font Awesome: 

```
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Example() {
  return <FontAwesomeIcon icon={faStar}/>;
}
```

## Étapes du développement

### Création de la page d'accueil
* Composant Header
* Composant Footer
* Composant Banner
* Composant Card

### Création de la page à propos
* Composant Collapse

### Création de la page d'erreur
* Composant Error
* Gestion de la redirection vers la page d'erreur pour toutes les routes incorrects avec l'errorElement

### Création de la page de logement
* Composant Carousel
* Composant Tag
* Composant Profile
* Composant Rating
* Utilisation du composant Navigate pour la redirection de toutes les id incorrects

## Structure du projet
* `src/`: Contient tous les fichiers sources.
    * `assets`: Contients toutes les images
    * `composents`: Contient les dossiers des composants React et leurs fichiers Sass associés.
    * `data`: Contient toute la data nécessaire au projet.
    * `pages`: Contient toutes les pages de l'application.