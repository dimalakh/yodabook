import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { CatalogComponent }            from './catalog/catalog.component';
import { ReaderComponent }             from './reader/reader.component';



const appRoutes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'book/:id', component: ReaderComponent },
  { path: '**', redirectTo: '' }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
