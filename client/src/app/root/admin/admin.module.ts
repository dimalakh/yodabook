import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule, Routes} from '@angular/router'
//Components
import {AdminComponent} from './admin.component'
import {AdminHome} from './home/home.component'
import {AdminDashboard} from './dashboard/dashboard.component'
//Services
import {AdminService} from './admin.service'

const adminRoutes:Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children:[{
            path:'',
            pathMatch: 'full',
            redirectTo: 'home',
        },{
            path: 'home',
            component: AdminHome
        },{
            path: 'dashboard',
            component: AdminDashboard
        }]
    }
]
//Module Defination/Declarations/Initialization
@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes),
        BrowserModule
    ],
    declarations: [
        //Component
        AdminComponent,
        AdminHome,
        AdminDashboard
    ],
    providers:[
        //Service
        AdminService
    ]
})
export class AdminModule{}