import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TraductorService } from '../../services/traductorservice.service'
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    selector: 'add-lang-and-serv',
    templateUrl: './add-lang-and-serv.component.html',
    styleUrls: ['./add-lang-and-serv.component.css']
})


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ]
})

/** addLangAndServ component*/
export class AddLangAndServComponent {

    public lenguageList: IdiomaData[];
    public serviceList: ServicioData[];



    /** addLangAndServ ctor */
    constructor(public http: Http, private _router: Router, private _traductorService: TraductorService) {
        this.getLanguages();
        this.getServices();
        var codigoPostal = "";
        var idioma = "";
        var servicio = "";
    }

    getServices() {
        this._traductorService.getServices().subscribe(
            data => this.serviceList = data
        )
    }

    getLanguages() {
        this._traductorService.getLanguages().subscribe(
            data => this.lenguageList = data
        )
    }  

}

// Interfaces para dar formato a los datos obtenidos de sql

interface IdiomaData {
    Idioma: string;
}

interface ServicioData {
    Servicio: string;
}
