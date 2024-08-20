class Animal {
  #species = "I am private";

  constructor(species: string) {
    this.#species = species;
  }
  printPrivateProperty() {
    console.log(`I am a private ${this.#species}`);
  }
}

const myCat = new Animal("Cat");
myCat.printPrivateProperty(); // 'I am a private Cat'
//console.log(myCat.#species); // SyntaxError: Private field '#species' must be declared in an enclosing class
