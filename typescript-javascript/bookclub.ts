import { IBook } from './interface-IBook'

export class BookClub implements IBook {
    bookId: number;
    bookTitle: string;
    genre: string;
    author: string;
    ISBN: number;
    books: any;
    getBookDetail(): string {return this.books};

    constructor(bookIdParam: number, bookTitleParam: string, genreParam: string, authorParam: string, ISBNParam: number, booksParam: any) {
        this.bookId = bookIdParam;
        this.bookTitle = bookTitleParam;
        this.genre = genreParam;
        this.author = authorParam;
        this.ISBN = ISBNParam;
        this.books = booksParam;
    }

}

var newBookClub: IBook = new BookClub(1234, "The man who think", "philosophy", "James Allen", 546_124_512, ["12 rules", "man searching meaning", "common sense"]);
console.info("book ID:", newBookClub.bookId);
console.info("book title:", newBookClub.bookTitle);
console.info("book genre:", newBookClub.genre);
console.info("book author:", newBookClub.author);
console.info("book ISBN:", newBookClub.ISBN);
console.info("similar books:", newBookClub.books);
