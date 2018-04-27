import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { TraductorService } from '../../services/traductorservice.service';
import { usuario } from '../translator-login/translator-login.component';
import { IdService } from '../../Services/id.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'perfil-page',
    templateUrl: './perfil-page.component.html',
    styleUrls: ['./perfil-page.component.css']
})
/** perfilPage component*/
export class PerfilPageComponent implements OnInit {

    public trad: TraductorData;
    constructor(public http: Http, private _router: Router, private _traductorService: TraductorService, private data: IdService) {
        
        this.getTraductors();
    }

    id: number;

    ngOnInit() {
        this.data.currentId.subscribe(id => this.id = id)
    }

    getTraductors() {

        this._traductorService.getTraductorById(this.id).subscribe(
            data => this.trad = data
        )
    }


    //loadId() {
    //   this._traductorService.getTraductorId(usuario).subscribe(
    //      data => this.id = data
    // )
    //}

    
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

interface idData {
    id: number;
}

