//Library Imports
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule, Routes} from '@angular/router'
//Modules
import {ErrorModule} from './error/error.module'
import {AdminModule} from './admin/admin.module'
//Components
import {RootComponent} from './root.component'
import {HomeComponent} from './home/home.component'
//Services
import {RootService} from './root.service'


//Module Defination/Declarations/Initialization
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AdminModule,
        ErrorModule
    ],
    declarations: [
        //Component
        RootComponent,
        HomeComponent
    ],
    providers:[
        //Service
        RootService
    ]
})
export class RootModule{}