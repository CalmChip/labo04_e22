class Personne {
  #nom;
  #age;
  constructor(nom, age) {
    this.#nom = nom;
    this.#age = age;
  }
  get nom() {
    return this.#nom;
  }
  get age() {
    return this.#age;
  }
  salut() {
    console.log(`Mon nom est ${this.nom} 
    et j'ai ${this.age} ans`);
  }
}

module.exports = Personne;
