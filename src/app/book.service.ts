import { Injectable } from '@angular/core';
import { Book } from './shared/book';
import { BOOKS } from './shared/books-mock';

@Injectable()
export class BookService {
  getBooks(): Promise<Book[]> {
    return Promise.resolve(BOOKS);
  }

  getBook(id: number): Promise<Book> {
    return this.getBooks()
    .then(books => books.find(book => book.id === id));
  }

}
