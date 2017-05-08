import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls:['./root.component.scss']
})
export class RootComponent{
    @Input() master: string;
    @Output() onYell = new EventEmitter();

    fire() {
        this.onYell.emit();
    }
}