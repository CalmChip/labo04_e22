const path = require("path");

console.log(`Affichage de path.basename: ${path.basename(__filename)}`);
console.log(`Affichage de path.dirname: ${path.dirname(__filename)}`);

console.log("Affichage de __Filename", __filename);
console.log("Affichage de __dirname", __dirname);

console.log(`Affichage de path.delimiter: ${path.delimiter}`);
console.log(`Affichage de path.extname: ${path.extname(__filename)}`);
console.log("Affichage de path.pase", path.parse(__filename));
const pathParse = path.parse(__filename);
console.log(pathParse.name); //Aller chercher une seul partie
