import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { TraductorService } from '../../services/traductorservice.service'
import { codigoPostal } from '../home/home.component'
import { idioma } from '../home/home.component'
import { servicio } from '../home/home.component'

@Component({
    selector: 'traductor-by-cp',
    templateUrl: './traductor-by-cp.component.html',
    styleUrls: ['./traductor-by-cp.component.css']
})

/** traductorByCP component*/
export class TraductorByCpComponent {

    cp: string;
    language: string;
    service: string;
    public tradList: TraductorData[]; 
    /** traductorByCP ctor */
    constructor(public http: Http, private _router: Router, private _avRoute: ActivatedRoute, private _traductorService: TraductorService) {
        this.cp = codigoPostal;
        this.language = idioma;
        this.service = servicio;
        this.getTraductorsData();
    }

    getTraductorsByCp() {

        console.log(this.cp);
        this._traductorService.getTraductorByCP(this.cp).subscribe(
            data => this.tradList = data
        )  
            
    }

    getTraductorsData() {
        console.log("codigo postal: " + codigoPostal + " idioma: " + idioma + " servicio: " + servicio);

        this._traductorService.getTraductorsDatos(codigoPostal, idioma, servicio).subscribe(
            data => this.tradList = data)
    }



}

interface TraductorData {
    name: string;
    lastname: string;
    email: string;
    cp: number;
    tlfn: number;
    language: string;
    service: string;
}