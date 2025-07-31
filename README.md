

\<p align="center"\>
\<a href="[http://nestjs.com/](http://nestjs.com/)" target="blank"\>\<img src="[https://nestjs.com/img/logo-small.svg](https://nestjs.com/img/logo-small.svg)" width="120" alt="Nest Logo" /\>\</a\>
\</p\>

\<h1 align="center"\>API de Gestion de Zoo - Projet d'Évaluation Finale\</h1\>


Une API backend robuste et sécurisée construite avec \<a href="[http://nodejs.org](http://nodejs.org)" target="\_blank"\>Node.js\</a\> et le framework NestJS.


## Description

Ce projet a été développé dans le cadre d'une évaluation finale. Il s'agit d'une **API RESTful** complète pour la gestion d'un parc zoologique, incluant la gestion des animaux, des habitats et un système de sécurité basé sur les rôles (RBAC) via **Auth0**.

### Fonctionnalités Clés ✨

  * **Gestion des Animaux et Habitats** : Endpoints CRUD complets pour les entités principales.
  * **Sécurité Basée sur les Rôles (RBAC)** :
      * Seuls les utilisateurs avec le rôle `gardien` peuvent supprimer des animaux.
      * Seuls les utilisateurs avec le rôle `veterinaire` peuvent soigner des animaux.
  * **Authentification JWT** : Routes sécurisées via des tokens JWT validés, fournis par Auth0.
  * **Base de Données avec Docker** : Utilisation de PostgreSQL dans un conteneur Docker pour un environnement de développement propre et reproductible.
  * **Documentation d'API Interactive** : Génération automatique d'une documentation Swagger accessible via `/api`.

-----

## Guide d'Installation et de Lancement 🚀

Suivez ces étapes pour mettre en place et lancer le projet localement.

### Prérequis

Assurez-vous d'avoir les outils suivants installés sur votre machine :

  * [Node.js](https://nodejs.org/) (version LTS recommandée)
  * [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### 1\. Installation du projet

Clonez le dépôt et installez les dépendances nécessaires.

```bash
# Clonez le projet (si ce n'est pas déjà fait)
 git clone https://github.com/KazzFR/projetapiESGI

# Accédez au dossier du projet
cd zoo-backend

# Installez les dépendances
$ npm install
```

### 2\. Configuration de l'environnement

Créez un fichier `.env` à la racine du projet et remplissez-le avec vos propres clés Auth0 et les informations de la base de données.

```env
# Configuration de la base de données
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=docker
DB_DATABASE=zoo

# Configuration Auth0
# (Trouvées dans votre tableau de bord Auth0)
AUTH0_AUDIENCE=http://localhost:3000
AUTH0_ISSUER_URL=https://[VOTRE_DOMAIN_AUTH0]/
```

### 3\. Lancement de la base de données

Lancez le conteneur PostgreSQL via Docker.

```bash
$ docker run --name zoo-postgres -e POSTGRES_PASSWORD=docker -e POSTGRES_USER=postgres -e POSTGRES_DB=zoo -p 5432:5432 -d postgres
```

### 4\. Lancement de l'application

```bash
# Mode développement avec rechargement automatique
$ npm run start:dev

# Mode production
# $ npm run start:prod
```

L'application est maintenant en cours d'exécution sur `http://localhost:3000`.

-----

## Tester l'API 🧪

La meilleure façon de tester l'API est d'utiliser l'interface `index.html` fournie à la racine du projet.

1.  **Ouvrez le fichier `index.html`** dans votre navigateur. Vous devriez voir les listes d'animaux et d'habitats se charger.

2.  **Test des routes non sécurisées** : Utilisez les formulaires sur la page pour ajouter un nouvel animal et un nouvel habitat. Ils devraient apparaître instantanément dans les listes.

3.  **Test des routes sécurisées (Rôles)** :

      * **Obtenez un Token Utilisateur** : Suivez la procédure pour générer un token pour un utilisateur (`gardien@zoo.com` par exemple) via le lien de connexion Auth0.
      * **Authentifiez-vous** : Collez ce token dans le champ "Authentification (JWT)" de la page `index.html` et cliquez sur "Sauvegarder le Token".
      * **Testez les Actions** :
          * Si vous êtes connecté avec un token de **gardien**, cliquez sur "Supprimer". L'animal disparaîtra. Un clic sur "Soigner" provoquera une erreur.
          * Si vous êtes connecté avec un token de **veterinaire**, cliquez sur "Soigner". La santé de l'animal sera mise à jour. Un clic sur "Supprimer" provoquera une erreur.

L'API peut également être explorée via **Swagger** à l'adresse [http://localhost:3000/api](https://www.google.com/search?q=http://localhost:3000/api).

-----

## Commandes de Test (Optionnel)

Le projet est configuré avec les scripts de test par défaut de NestJS.

```bash
# tests unitaires
$ npm run test

# tests de bout en bout (e2e)
$ npm run test:e2e

# couverture de test
$ npm run test:cov
```

