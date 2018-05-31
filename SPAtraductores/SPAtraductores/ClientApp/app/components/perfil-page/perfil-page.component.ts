import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { TraductorService } from '../../services/traductorservice.service';
import { usuario } from '../translator-login/translator-login.component';
import { OnInit, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Directive } from '@angular/core/src/metadata/directives';
import { Popup } from 'ng2-opd-popup';


@Component({
    selector: 'perfil-page',
    templateUrl: './perfil-page.component.html',
    styleUrls: ['./perfil-page.component.css']
})
/** perfilPage component*/
export class PerfilPageComponent implements OnInit/*, OnChanges*/ {

    private show: boolean = false;
    private id: number;
    public trad: TraductorData;
    public langList: Idioma[];
    public servList: Servicio[];
    public requestList: Peticion[];
    public request: Peticion;
    public content: string;

    public cargaPagina: boolean;

    @ViewChild('requestPopup') requestPopup: Popup;
    @ViewChild('messagePopup') messagePopup: Popup;

    /*, private requestPopup: Popup, private messagePopup: Popup*/
    constructor(public http: Http, private _router: Router, private _traductorService: TraductorService) {
        this.cargaPagina = false;
    }

    ngOnInit() {
        this.loadId();
        
    }

    //ngOnChanges() {
    //    this.getTraductors();
    //}

    cargarPerfil() {
        this.getTraductors();
        this.getIdiomasHablados();
        this.getServiciosTrad();
        
    }

    getTraductors() {
        console.log("Mostrando datos...")
        this._traductorService.getTraductorById(this.id).subscribe(
            data => { this.trad = data

                if (this.trad.name ) {
                    this.cargaPagina = true;
                }
            }
        )
    }

    loadId() {
       this._traductorService.getTraductorId(usuario).subscribe(
           data => {
               this.id = data;
               this.getTraductors();
               this.getServiciosTrad();
               this.getIdiomasHablados();
               this.getRequests();
           }
      )

    }

    delete(idTraductores) {
        var ans = confirm("Do you want to delete customer with Id: " + idTraductores);
        if (ans) {
            this._traductorService.deleteTraductor(idTraductores).subscribe((data) => {
                this.getTraductors();
            }, error => console.error(error))
        }
    }

    getIdiomasHablados() {
        this._traductorService.getIdiomasHablados(this.id).subscribe(
            data => this.langList = data
        )
    }

    getServiciosTrad() {
        this._traductorService.getServiciosTrad(this.id).subscribe(
            data => this.servList = data
        )
    }

    getRequests() {
        this._traductorService.getRequestForTranslator(this.id).subscribe(
            data => this.requestList = data
        )
    }

    mostrar() {
        this.show = !this.show;
    }

    prueba() {

        this.content = "Prueba de mensaje alerta";

        this.messagePopup.options = {
            color: "#ec971f",
            cancleBtnContent: "",
            confirmBtnClass: "hide",
            cancleBtnClass: "btn btn-sm btn-danger glyphicon glyphicon-remove botonCerrarPopup",
            header: "Alert",
            widthProsentage: 70,
            animation: "bounceIn"
        }

        this.messagePopup.show(this.messagePopup.options);
    }

    mostrarDetalles(request) {

        this.request = request;

        this.requestPopup.options = {
            color: "#337ab7",
            cancleBtnContent: "",
            confirmBtnClass: "hide",
            cancleBtnClass: "btn btn-sm btn-danger glyphicon glyphicon-remove botonCerrarPopup",
            header: "Applicant Name: "+request.nombreSolicitante,
            widthProsentage: 70,
            animation: "fadeInDown"
        }

        this.requestPopup.show(this.requestPopup.options);
    }
}
interface TraductorData {
    id: number;
    email: string;
    usuario: string;
    pass: string;
    name: string;
    lastname: string;
    cp: number;
    tlfn: number;
    imagen: string;
}

interface Idioma {
    id: number;
    idioma: string;
}

interface Servicio {
    id: number;
    servicio: string;
}

interface Peticion {
    nombreSolicitante: string;
    email: string;
    descripcion: string;
    tlfn: string;
    idioma: string;
    servicio: string;
}

