// Javascript

const myLibrary = [];

function Book(title,author) {
    this.title = title;
    this.author = author;
}

function addBookToLibrary(title,author) {
    const book = new Book(title,author)
    Object.getPrototypeOf(Book.prototype);
}