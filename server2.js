//appelle de la librairie express
const express=require('express');

//initialisation de l'express
const server=express();

// declaration de la port
const PORT=3000;

const users = [
  {
    id:1,  
    nom: 'Lisangola',
    prenom: 'Christian',
    email: '',
    poste: 'Homme de ménage',
    numeroTelephone: ['+243908888888'],
    estMarie: false,
    pays: 'RDCongo',
  },
  {
      id:2,
    nom: 'Motoba',
    prenom: 'Claude',
    email: 'claude@gmail.com',
    poste: 'Architecte infrastructures',
    numeroTelephone: ['+243818885454', '+243844457484'],
    estMarie: true,
    pays: 'Liban',
  },
  {
      id:3,
    nom: 'Nyembo',
    prenom: 'Thesy',
    email: 'thesy.nyembo@gmail.com',
    poste: 'DevOPS & Développeuse Fullstack',
    numeroTelephone: ['+2438108488888', '+243844145444'],
    estMarie: false,
    pays: 'Djibouti',
  },
  {
      id:4,
    nom: 'Gael',
    prenom: 'Mapwata',
    email: 'mapwata.gael@gmail.com',
    poste: 'Administrateur systèmes & Réseaux',
    numeroTelephone: ['+243818897188', '+243844445744'],
    estMarie: true,
    pays: 'Inde',
  },
  {
      id:5,
    nom: 'Makengo',
    prenom: 'Stanislas',
    email: 'makengo.stanislas@gmail.com',
    poste: 'Chef de projet digital',
    numeroTelephone: ['+243814428888', '+243844446734'],
    estMarie: true,
    pays: 'Algérie',
  },
  {
      id:6,
    nom: 'Ndovia',
    prenom: 'Ruth',
    email: 'ruth.ndovia@gmail.com',
    poste: 'Administrateur systèmes & Réseaux',
    numeroTelephone: ['+24381458888', '+243844434444'],
    estMarie: false,
    pays: 'RDCongo',
  },
  {
      id:7,
    nom: 'Bondjali',
    prenom: 'Chris',
    email: '',
    poste: 'Cordonier',
    numeroTelephone: ['+24390999898'],
    estMarie: true,
    pays: 'RDCongo',
  },
];

//EXERCICE
//Ajouter la possibilité de 
// - supprimer un object du tableau au travers de son ID
//   Mais il faudra utiliser la methode "delete" de express
//- D'ajouter un nouvelle element dans le tableau
//  Il faut utiliser la methode POST
//Pour tester pour devez utiliser postman

//Voici les indices
// - cors
// - Ajouter un middleware qui mettre les informations envoyées avec POST dans la methode BODY
//   à voir express.bodyparser(...)
//Expliquer chaque ligne de code par un brief commentaire et expliquer son utilité et problème qu'il résoud
/**
 * Il y a des commentaires qui expliquent tous ce que vous devez faire.Mais le fichier je l'ai envoyé seul
 *  sans le fichier "package.json" ou autre chose.C'est à de faire tout ce qu'il faut pour faire tourner le
 *  projet et après vous allez m'envoyer un dossier zip avec votre projet.Mais dans votre ZIP ne mettez pas
 *  le dossier "node_modules"
 * 
 */
//on aura le message de bienvenue dans la page lors de la visite 
server.get('/',function(req,res){
    res.send("Bienvenu dans notre page")
});
//ici la requette envoie la liste de tout les utilisateurs
server.get('/api/users',(req,res)=>{
    res.send(users);
});

//ici on a preciser avec le parseint que les id seront des entiers
server.get('/api/users/:matricule',(req,res)=>{
    const user=users.find((user)=>user.id===parseInt(req.params.matricule));
    res.send(user);
})
//

//la methode Post
server.post('/api/users',(req,res)=>{
  let User=req.body;
  users.push(User);
  console.log(users)
  res.send({
    index: users.length,
    user: User[users.length]
  })
})

//Delete pour la suppression des utilisateurs par leur identifiant
//id-1 pour commencer avec le 1 er élement du tableau qui est 0
server.delete('/api/users/:id',(req,res)=>{
  const id=req.params.id - 1;
  users.splice(id, 1);
  console.log(users);
  res.sendStatus(200)
});

//on precise que notre server va écouté sur le port 3000 qui était dejà declaré ci-haut
server.listen(PORT,function(){
    console.log(`Le serveur écoute sur le PORT ${PORT}`);
})








