# Demo Web API 02 - Swagger
Mise en place d'un API documenté avec Swagger

## Fonctionnalité de l'API 
Gestion d'équipe pour des activités sportives
- Ajouter ou modifier des joueurs
- Ajouter, Modifier, supprimer une équipe
- Ajouter ou retirer des joueurs dans une equipe
- Obtenir les infos d'une equipe
- Obtenir la liste des equipes

### Structure de données
Equipe:
```
Id
Nom
Sport
Périodicité
Joueurs
```

Joueur:
```
Id
Email
Prenom
Nom
```

### Endpoints
Joueur
```
[POST] /player
[GET]  /player/:email
[PUT]  /player/:email
```

Equipe
```
[GET]    /team
[POST]   /team
[GET]    /team/:id
[PUT]    /team/:id
[DELETE] /team/:id
[PATCH]  /team/:id/addPlayer
[PATCH]  /team/:id/removePlayer
```

## Dépendences
Prod
- express
- express-async-errors
- express-jsdoc-swagger
- yup
- dotenv
- morgan

Dev
- nodemon
