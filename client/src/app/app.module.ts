//Library imports
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component'
import { RootModule } from './root/root.module'

@NgModule({
    imports:[
        BrowserModule,
        RootModule
    ],
    declarations: [
        AppComponent
    ],
    providers:[],
    bootstrap: [AppComponent]
})
export class AppModule{}