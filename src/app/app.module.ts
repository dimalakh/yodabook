import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { Ng2PaginationModule } from 'ng2-pagination';
import { NgSemanticModule } from 'ng-semantic/ng-semantic';


import { AppComponent } from './app.component';
import { ReaderComponent } from './reader/reader.component';
import { CatalogComponent } from './catalog/catalog.component';
import { routing } from './app.routes';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BookService } from './book.service';

@NgModule({
  declarations: [
    AppComponent,
    ReaderComponent,
    CatalogComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2PaginationModule,
    NgSemanticModule,
    MaterialModule.forRoot()
  ],
  exports: [ RouterModule ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
