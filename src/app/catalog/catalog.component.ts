import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit {
  books: string[];
  constructor() {
    this.books = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
   }

  ngOnInit() {
  }

}
