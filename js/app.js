'use strict'

let myLibrary = [];

const bookLibraryList = document.querySelector('.books-list');
const bookTitle = document.querySelector('.book-title');

console.log(bookTitle.textContent)

function Book( title, author, pages, read ){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.removeBook = function () {
    console.log(`removing ${this}`);
}

function addBookToLibrary(book) {
    const bookListItem = document.createElement('tr');

    let bookName = document.createElement('td');
    let bookAuthor = document.createElement('td');
    let bookPages = document.createElement('td');
    let bookRead = document.createElement('td');
    let bookRemove = document.createElement('td');

    bookName.innerHTML = book.title;
    bookAuthor.innerHTML = book.author;
    bookPages.innerHTML = book.pages;
    bookRead.innerHTML = book.read;
    bookRemove.innerHTML = 'remove';

    bookListItem.appendChild(bookName);
    bookListItem.appendChild(bookAuthor);
    bookListItem.appendChild(bookPages);
    bookListItem.appendChild(bookRead);
    bookListItem.appendChild(bookRemove);

    bookLibraryList.appendChild(bookListItem)
}

const book1 = new Book('Mec osudu', 'A. Sapkowski', 297, true);
const book2 = new Book('Posledne prani', 'A. Sapkowski', 245, true);

myLibrary.push(book1);
myLibrary.push(book2);

myLibrary.forEach(book => {
    addBookToLibrary(book);
});

