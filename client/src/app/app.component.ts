import { Component } from '@angular/core'
import { AppService } from './app.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls:['./app.component.scss']
})
export class AppComponent{
    master = 'Master';
    constructor(private hola: AppService) {

    }

    yell(e: any) {
        console.log('yell');
    }
}