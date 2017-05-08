import 'hammerjs';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { OverlayContainer } from '@angular/material';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RootComponent} from './root/root.component';
import { SharedModule } from './shared/shared.module';
import { AppService } from './app.service';

@NgModule({
    imports:[
        BrowserModule,
        SharedModule,
        MaterialModule.forRoot(),
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        RootComponent
    ],
    providers:[AppService],
    bootstrap: [AppComponent]
})
export class AppModule{
    constructor(overlayContainer: OverlayContainer) {
        overlayContainer.themeClass = 'unicorn-dark-theme';
    }
}