import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TraductorService } from '../../services/traductorservice.service' 
import { Http } from '@angular/http';
import { Router } from '@angular/router';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ]
    })
export class HomeComponent {

    public lenguageList: IdiomaData[];
    constructor(public http: Http, private _router: Router, private _traductorService: TraductorService) {
        this.getLanguages();
    }  

    getLanguages() {
        this._traductorService.getLanguages().subscribe(
            data => this.lenguageList = data
        )
    }  

    search(x) { console.log(this.lenguageList); }
}

interface IdiomaData {
    Idioma: string;
}
