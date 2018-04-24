import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { TraductorService } from '../../services/traductorservice.service'  

@Component({
    selector: 'traductor-by-cp',
    templateUrl: './traductor-by-cp.component.html',
    styleUrls: ['./traductor-by-cp.component.css']
})

/** traductorByCP component*/
export class TraductorByCpComponent {

    cp: string;
    public tradList: TraductorData[]; 
    /** traductorByCP ctor */
    constructor(public http: Http, private _router: Router, private _avRoute: ActivatedRoute, private _traductorService: TraductorService) {
        this.cp = this._avRoute.snapshot.params["CP"];
        this.getTraductorsByCp(this.cp)
    }

    getTraductorsByCp(cp) {

        this._traductorService.getTraductorByCP(cp).subscribe(
            data => this.tradList = data
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