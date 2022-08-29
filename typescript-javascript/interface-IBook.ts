export interface IBook {
    bookId: number;
    bookTitle: string;
    genre: string;
    author: string;
    ISBN?: number;
    books?: any;

    getBookDetail(): string;
}