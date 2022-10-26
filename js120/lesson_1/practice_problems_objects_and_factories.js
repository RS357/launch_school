function createBook (title, author,  read = false) {
  return {
    title,
    author,
    read,

    getDescription() {
      return `${title} was written by ${author}.` +
      ` I ${this.read ? "have" : "haven't"} read it"`;
    },

    readBook() {
      this.read = true;
    }
  };
}

let book1 = createBook("Mythos", "Stephen Fry");
// let book2 = createBook("Me Talk Pretty One Day", "David Sedaris");
// let book3 = createBook("Aunts aren't Gentlemen", "PG Wodehouse");

console.log(book1.read); // => false
book1.readBook();
console.log(book1.read); // => true