import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Book } from '../shared/book';
import { BookService} from '../book.service';

@Component({
  selector: 'reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.sass']
})
export class ReaderComponent implements OnInit {
  book: Book;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  public config = {
    id: 'custom',
    itemsPerPage: 1,
    currentPage: 1
  };

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.bookService.getBook(+params['id']))
      .subscribe(book => this.book = book);
}




}
