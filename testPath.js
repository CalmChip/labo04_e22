const path = require("path");

console.log(`Affichage de path.basename: ${path.basename(__filename)}`);
console.log(`Affichage de path.dirname: ${path.dirname(__filename)}`);

console.log("Affichage de __Filename", __filename);
console.log("Affichage de __dirname", __dirname);

console.log(`Affichage de path.delimiter: ${path.delimiter}`);
console.log(`Affichage de path.extname: ${path.extname(__filename)}`);
console.log("Affichage de path.parse", path.parse(__filename));
const pathParse = path.parse(__filename);
console.log(pathParse.name); //Aller chercher une seul partie
console.log(pathParse.root); //Aller chercher une seul partie
console.log(pathParse.dir); //Aller chercher une seul partie
console.log("Affichage de path.parse.ext", path.parse(__filename).ext);
console.log(
  "construction d'un chemin de fichier ",
  path.join(__dirname, "mesFichiers", "toto.txt")
);

const fs = require("fs");

// fs.mkdirSync(path.join(__dirname, "MesFichiers", "test99"));  //Creer un fichier a cet endroit
fs.unlinkSync(path.join(__dirname, "MesFichiers", "toto.txt"));
