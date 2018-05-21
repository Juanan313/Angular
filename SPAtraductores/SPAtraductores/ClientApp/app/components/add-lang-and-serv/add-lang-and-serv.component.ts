import { Component, NgModule, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TraductorService } from '../../services/traductorservice.service'
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Directive } from '@angular/core/src/metadata/directives';
import { idioma } from '../home/home.component';

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

    @Input() id: number;

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


    addLangServ(tradId) {
        //if ( tradId == 0 ) {
        //    return false;
        //} 

        //alert(this.id);

        //var idiomas = document.getElementsByClassName('chkbxidioma');
        //var servicios = document.getElementsByClassName('chkbxservicio');

        //for (var i = 0; i < idiomas.length; i++) {
        //    console.log(idiomas[i])
        //}
        alert(this.id);
        this._traductorService.saveTraductorServicios(4, 10003).subscribe((data) => { });
    }
   
}

// Interfaces para dar formato a los datos obtenidos de sql

interface IdiomaData {
    Idioma: string;
    id: number;
}

interface ServicioData {
    Servicio: string;
    id: number;
}
