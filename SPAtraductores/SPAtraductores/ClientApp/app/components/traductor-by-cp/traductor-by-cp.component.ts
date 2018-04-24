import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { TraductorService } from '../../services/traductorservice.service'  

@Component({
    selector: 'app-traductor-by-cp',
    templateUrl: './traductor-by-cp.component.html',
    styleUrls: ['./traductor-by-cp.component.css']
})

/** traductorByCP component*/
export class TraductorByCpComponent {

    public tradList: TraductorData[]; 
    /** traductorByCP ctor */
    constructor(public http: Http, private _router: Router, private _traductorService: TraductorService) {
        this.getTraductorsByCp();
    }

    getTraductorsByCp() {

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