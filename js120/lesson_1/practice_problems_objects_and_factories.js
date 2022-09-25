let createBook = (title, author) => {
  return {
    title,
    author,
    read: false,

    getDescription() {
      return `${title} was written by ${author}`;
    }
  };
};

let book1 = createBook("Mythos", "Stephen Fry");
let book2 = createBook("Me Talk Pretty One Day", "David Sedaris");
let book3 = createBook("Aunts aren't Gentlemen", "PG Wodehouse");

console.log(book1.read); // => false
console.log(book2.read); // => false
console.log(book3.read); // => false