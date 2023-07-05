# Piiquante - Backend - Projet OpenClassrooms

Projet 6 de la formation Développeur Web d'OpenClassrooms

Backend du projet Piiquante

Pour ce projet j'ai dû créer le backend du site Piiquante en partant de zéro avec NodeJs et le framework Express. La base de données est gérée avec mongodb.

## Pour commencer

- Cloner le repo et le copier dans le dossier avec le Frontend
- Aller sur le dossier racine du backend et lancer la commande npm install pour installer les dependances
- Creer un fichier .env dans la racine contenant les cles suivantes:
  SECRET_DB (Le lien complet de votre base de donnees exemple: mongodb+srv://<username>:<password>@<host>/?retryWrites=true&w=majority)
  SECRET_TOKEN (le token necessaire a l'authentification exemple: MY_SECRET_TOKEN)
- Pour lancer le backend lancer la commande npm start depuis la racine du backend.

## Dependances

    "bcrypt": "^5.1.0",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "helmet": "^6.0.1",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^6.8.3",
    "mongoose-unique-validator": "^3.1.0",
    "mongoose-validator": "^1.3.1",
    "multer": "^1.4.5-lts.1",
    "nodemon": "^2.0.20",
    "password-validator": "^5.3.0"

## Fabriqué avec

- Visual Studio Code
- NodeJs
- Express

## Auteurs

- **Alexandre JOIGNANT** _alias_ [@alexj704](https://github.com/alexj704)
