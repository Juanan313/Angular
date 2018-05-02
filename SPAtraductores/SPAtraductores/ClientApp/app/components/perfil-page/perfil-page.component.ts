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
    constructor(public http: Http, private _router: Router, private _traductorService: TraductorService) {

        
    }

    ngOnInit() {
        this.loadId();
    }

    //ngOnChanges() {
    //    this.getTraductors();
    //}

    getTraductors() {
        console.log("Mostrando datos...")
        this._traductorService.getTraductorById(this.id).subscribe(
            data => this.trad = data
        )
    }

    loadId() {
       this._traductorService.getTraductorId(usuario).subscribe(
           data => this.id = data
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

    mostrar() {
        this.show = !this.show;
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

