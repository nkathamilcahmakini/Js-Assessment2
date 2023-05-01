const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
isAvailable: true },
{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
isAvailable: false },
{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
1866, isAvailable: true },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
isAvailable: false },
{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];
// Write a JavaScript program that performs the following tasks:

// 1.Create a function called getAvailableBooks that returns an array of all available
// books.
 
function getAvailableBooks(books) {
  return books.filter(book => book.isAvailable);
}
const availableBooks = getAvailableBooks(books);
console.log(availableBooks);
  
// 2.Create a function getBooksByAuthor that takes an author's name as an argument and
// runs an array of all books by that author.
function getBooksByAuthor(books, authorName) {
  return books.filter(book => book.author === authorName);
}
const booksByFitzgerald = getBooksByAuthor(books, 'F. Scott Fitzgerald');
console.log(booksByFitzgerald);

// 3.Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).

const addNewBook = (book) => {
  if (!book.title || !book.author || !book.publicationYear || !book.isAvailable) {
    console.log("Error: Book object is missing required properties.");
    return;
  }
  library.push(book);
}
const newBook = { title: 'Born a Crime ', author: 'Trevor Noah', publicationYear: 2009, isAvailable: true };
addNewBook(newBook);
console.log(library);



// 4. Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.


//5.Create a function returnBook that takes a book title as an argument and changes the
//book's isAvailable property to true. If the book is not found in the library, the function
//should return a message indicating that the book does not belong to the library.