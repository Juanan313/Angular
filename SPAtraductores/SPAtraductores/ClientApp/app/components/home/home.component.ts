import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ]
    })
export class HomeComponent {
}
