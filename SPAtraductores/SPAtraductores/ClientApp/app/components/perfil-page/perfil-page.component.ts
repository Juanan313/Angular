import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { TraductorService } from '../../services/traductorservice.service';
import { usuario } from '../translator-login/translator-login.component';
import { OnInit, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Directive } from '@angular/core/src/metadata/directives';


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
    constructor(public http: Http, private _router: Router, private _traductorService: TraductorService) {

        
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
            data => this.trad = data
        )
    }

    loadId() {
       this._traductorService.getTraductorId(usuario).subscribe(
           data => {
               this.id = data;
               this.getTraductors();
               this.getServiciosTrad();
               this.getIdiomasHablados();
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

    mostrar() {
        this.show = !this.show;
    }

    prueba() {
        console.log(
            this.langList 
        )
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
}

interface Idioma {
    id: number;
    idioma: string;
}

interface Servicio {
    id: number;
    servicio: string;
}

