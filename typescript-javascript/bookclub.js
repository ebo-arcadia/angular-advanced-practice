"use strict";
exports.__esModule = true;
exports.BookClub = void 0;
var BookClub = /** @class */ (function () {
    function BookClub(bookIdParam, bookTitleParam, genreParam, authorParam, ISBNParam, booksParam) {
        this.bookId = bookIdParam;
        this.bookTitle = bookTitleParam;
        this.genre = genreParam;
        this.author = authorParam;
        this.ISBN = ISBNParam;
        this.books = booksParam;
    }
    BookClub.prototype.getBookDetail = function () { return this.books; };
    ;
    return BookClub;
}());
exports.BookClub = BookClub;
var newBookClub = new BookClub(1234, "The man who think", "philosophy", "James Allen", 546124512, ["12 rules", "man searching meaning", "common sense"]);
console.info("book ID:", newBookClub.bookId);
console.info("book title:", newBookClub.bookTitle);
console.info("book genre:", newBookClub.genre);
console.info("book author:", newBookClub.author);
console.info("book ISBN:", newBookClub.ISBN);
console.info("similar books:", newBookClub.books);
