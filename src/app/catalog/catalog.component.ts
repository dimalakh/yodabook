import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../shared/book';
import { BookService} from '../book.service';

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) {}

  getBooks(): void{
    this.bookService.getBooks().then(books => this.books = books);
  }



  ngOnInit(): void {
    this.getBooks()
  }

}
