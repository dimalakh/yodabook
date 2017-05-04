//Library Imports
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule, Routes} from '@angular/router'
//Components
import {ErrorComponent} from './error.component'
import {Error401Component} from './401/401.component'
import {Error404Component} from './404/404.component'
//Services
import {ErrorService} from './error.service'

const errorRoutes:Routes = [
    {
        path: 'error',
        component: ErrorComponent,
        children:[{
            path:'',
            pathMatch: 'full',
            redirectTo: '404',
        },{
            path: '401',
            component: Error401Component
        },{
            path: '404',
            component: Error404Component
        },{
            path: '**',
            redirectTo: '404'
        }]
    }
]
//Module Defination/Declarations/Initialization
@NgModule({
    imports: [
        RouterModule.forChild(errorRoutes),
        BrowserModule
    ],
    declarations: [
        //Component
        ErrorComponent,
        Error401Component,
        Error404Component
    ],
    providers:[
        //Service
        ErrorService
    ]
})
export class ErrorModule{}