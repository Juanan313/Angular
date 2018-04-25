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

    // Listas donde se guardon los datos de sql a mostrar en los selects
    public lenguageList: IdiomaData[];
    public serviceList: ServicioData[];


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

    search(cp, language, service) {
        ////var CP = ((document.getElementById("CP") as HTMLInputElement).value);
        codigoPostal = cp.value.toString();
        idioma = language.value.toString();
        servicio = service.value.toString();

        console.log("codigo postal: " + codigoPostal + " idioma: " + idioma + " servicio: " + servicio);
        this._router.navigate(['/traductor-bycp']);
    }
}

export var codigoPostal;
export var idioma;
export var servicio;

// Interfaces para dar formato a los datos obtenidos de sql

interface IdiomaData {
    Idioma: string;
}

interface ServicioData {
    Servicio: string;
}
