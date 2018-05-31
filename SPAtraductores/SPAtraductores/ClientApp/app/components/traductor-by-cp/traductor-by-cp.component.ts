import { Component, Inject, ViewChild } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { TraductorService } from '../../services/traductorservice.service';
import { codigoPostal } from '../home/home.component';
import { idioma } from '../home/home.component';
import { servicio } from '../home/home.component';
import { Popup } from 'ng2-opd-popup';

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
    public showTrads: Boolean;
    public traductorId: number;
    public idIdioma: number;
    public idServicio: number;

    @ViewChild('requestFormPopup') requestFormPopup: Popup;
    
    /** traductorByCP ctor */
    constructor(public http: Http, private _router: Router, private _avRoute: ActivatedRoute, private _traductorService: TraductorService) {
        this.cp = codigoPostal;
        this.language = idioma;
        this.service = servicio;
        this.getTraductorsData();
        this.traductorId = 0;
        this.idIdioma = 0;
        this.idServicio = 0;
    }

    getTraductorsByCp() {

        console.log(this.cp);
        this._traductorService.getTraductorByCP(this.cp).subscribe(
            data => {
                this.tradList = data;
                
            }
        )  
            
    }

    getTraductorsData() {
        console.log("codigo postal: " + codigoPostal + " idioma: " + idioma + " servicio: " + servicio);

        this._traductorService.getTraductorsDatos(codigoPostal, idioma, servicio).subscribe(
            data => this.tradList = data)
    }


    requestPopup(idTraductor, idServicio, idIdioma) {
        this.traductorId = idTraductor;
        this.idServicio = idServicio;
        this.idIdioma = idIdioma;

        //alert(
        //    "Id traductor: " + this.traductorId +
        //    ", idIdioma: " + this.idIdioma +
        //    ", idServicio: " + this.idServicio
        //);

        this.requestFormPopup.options = {
            color: "#337ab7",
            confirmBtnContent: "Add a request",
            cancleBtnContent: "",
            confirmBtnClass: "hide",
            cancleBtnClass: "btn btn-danger botonCerrarPopup glyphicon glyphicon-remove",
            header: "Add a Request for our translator",
            widthProsentage: 70,
            animation: "fadeInDown"
        }
        this.requestFormPopup.show(this.requestFormPopup.options);
    }

}

interface TraductorData {
    name: string;
    lastname: string;
    email: string;
    cp: number;
    tlfn: number;
    idioma: string;
    servicio: string;
    idTraductor: number;
    idIdioma: number;
    idServicio: number;
    imagen: string;
}