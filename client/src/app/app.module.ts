import 'hammerjs';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { OverlayContainer } from '@angular/material';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RootModule } from './root/root.module';

@NgModule({
    imports:[
        BrowserModule,
        RootModule,
        MaterialModule.forRoot(),
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent
    ],
    providers:[],
    bootstrap: [AppComponent]
})
export class AppModule{
    constructor(overlayContainer: OverlayContainer) {
        overlayContainer.themeClass = 'unicorn-dark-theme';
    }
}