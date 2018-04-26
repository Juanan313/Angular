import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { TraductorService } from '../../services/traductorservice.service';

@Component({
    selector: 'perfil-page',
    templateUrl: './perfil-page.component.html',
    styleUrls: ['./perfil-page.component.css']
})
/** perfilPage component*/
export class PerfilPageComponent {


    public trad: TraductorData;
    constructor(public http: Http, private _router: Router, private _traductorService: TraductorService) {
        this.getTraductors();
    }
    getTraductors() {
        this._traductorService.getTraductorById(10006).subscribe(
            data => this.trad = data
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

