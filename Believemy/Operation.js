

// const age =  +prompt(" tu as quel age ?")

// const  nom = "jack"; 
// const prenom = " russ"

// console.log("je m'appelle " +prenom+ ' ' +nom + " j'ai "+age+ " ans");


// 


// function demanderAge(){

// let age = +prompt (" tu as quel age ?  : ");
//  age = Number(age);
//  console.log( " l'année prochaine tu auras " +(age+1)+  " ans");
// }
//  demanderAge();


// // Caluer IMC

// const taille = +prompt (" quelle est ta taille en cm?");
// const poids  = +prompt (" quel est ton poids ?");

// function calculerImc(poids, taille){

//     let tailleEnMettre = taille/100;
//     let tailleEnmettreCarrée = Math.pow(tailleEnMettre, 2);

//     const IMC = poids/ tailleEnmettreCarrée;

//     return IMC;

// }
// console.log(calculerImc(poids, taille));


// let monTableau = ["un", "deux", "trois", "quatre", "cinq"];

// // monTableau.pop(); // supprimer le dernier elemnt d'un tableau
// // monTableau.shift();   // supprimer le premier element d'un tableau

// console.log (monTableau.indexOf("deux"));
// console.log(monTableau.join(","))
// console.log(monTableau.join("|o|"))
// monTableau.push(1,2,3,4,5);
// monTableau.unshift(a,b,c,d,e);
// console.log (monTableau);
// console.log (monTableau);
  

// for classic

// let panier = ["fraise", "banane", "poire"];

// for (let fruit= 0; fruit<panier.length; fruit++ ){
//     console.log (panier[fruit]);
// }

//  for of

// let listePays = ["france", "belgique", "japon", "maroc"];

// for (let pays of listePays){

//     console.log(pays);
// }


//  foreach

// listePays.forEach(function(pays){

//     console.log(pays);
// });


//  fonction flechée

// listePays.forEach(pays => {

//     console.log(pays);
// });


// POO EN JS

// let mark = {

//     prenom : "mark",
//     nom : "zuckerberg",
//     email : "marc@facebook.com",

//     sePresenter(){
//     console.log(" je m'appelle " +this.prenom + " " +this.nom+ " je suis le fondateur de FB");   
// }

// }
// mark.sePresenter();

// let coordonnées = recevoirLesCoordonnées();

// function recevoirLesCoordonnées(){

//     return {latitude:  25, longitude:  45};
// }
// console.log (coordonnées.longitude);
// console.log (coordonnées.latitude);


//   Orienté Objet


// function Utilisateur(prenom, nom, email) {
//   this.prenom = prenom;
//   this.nom    = nom;
//   this.email  = email;
// }
// Utilisateur.prototype.sePresenter = function() {
//     console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse email " + this.email);
// }

// // On crée un objet


// var mark = new Utilisateur('Mark', 'Zuckerberg', 'mark@facebook.com');
// var bill = new Utilisateur('Bill', 'Gates', 'bill@gatesnotes.com');

// console.log(mark); // On voit que JavaScript ajoute une propriété __proto__ et constructor

// mark.sePresenter();

// // Créer un objet avec Object()
// var monObjet = new Object();
// monObjet.titre = "Le titre de l'objet";



//  Heritage


// // Constructeur de base
// function Animal(nombreDePattes, poids) {
//   this.nombreDePattes = nombreDePattes;
//   this.poids         = poids;
// }
// Animal.prototype.presentation = function() {
//   console.log('Cet animal possède ' + this.nombreDePattes + ' pattes et fait ' + this.poids + '.');
// }

// // Constructeurs spécialisés
// function Oiseau(nombreDePattes, poids, longueurDesAiles) {
//   Animal.call(this, nombreDePattes, poids); // La fonction Call() permet d'appeler une fonction constructeur : en premier paramètre on donne l'objet actuel (this), ensuite, on donne les arguments pour son constructeur 
//   this.longueurDesAiles = longueurDesAiles;
// }
// Oiseau.prototype = Object.create(Animal.prototype); // On change les informations en donnant un nouvel objet qui sera le prototype de notre constructeur animal
// Oiseau.prototype.constructor = Oiseau; // On redéfinit la valeur de Oiseau.prototype.constructor car elle a été changée avec le changement de prototype

// function Mammifere(nombreDePattes, poids, typeDePoils) {
//   Animal.call(this, nombreDePattes, poids);
//   this.typeDePoils = typeDePoils;
// }
// Mammifere.prototype = Object.create(Animal.prototype);
// Mammifere.prototype.constructor = Mammifere;

// var perroquet = new Oiseau(2, '1kg', 'grandes');
// // console.log(perroquet.nombreDePattes);

// perroquet.presentation();



// Getter et Setter


class Utilisateur {
  constructor(prenom, nom, email) {
    this.prenom = prenom;
    this.nom    = nom;
    this.email  = email;
  }
  
  // Un getter (accesseur) permet de récupérer une propriété
  get nomComplet() {
    return this.prenom + ' ' + this.nom;
  }
  
  // Un setter (mutateur) permet de définir une propriété
  set nomComplet(valeur) {
    [this.prenom, this.nom] = valeur.split(' '); // split() divise une chaîne de caractère à partir d'un séparateur pour faire un tableau
  }
  
  sePresenter() {
    console.log("Je m'appelle " + this.prenom + ' ' + this.nom + " et vous pouvez me contacter à l'adresse email " + this.email + ".");
  }
}

var chris = new Utilisateur('Christian', 'DOBE', 'christiandobe@hotmail.fr');
console.log(chris.nomComplet);
chris.nomComplet = "Christian DOBE";
console.log(chris.nomComplet);