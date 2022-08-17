console.log("Hello there");

const personne = require("./personne");
//  import personne from './personne/'
console.log("Le nom: " + personne.nom);
console.log("Il a: " + personne.age + " ans");

const Personne = require("./classpersonne");
let bob = new Personne("Bob Laforest", 38);
bob.salut();
console.log(`Mon nom est ${bob.nom} et j'ai ${bob.age}`);
