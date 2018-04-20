import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { TraductorService } from '../../services/traductorservice.service';

@Component({
    selector: 'servicios-fetch',
    templateUrl: './servicios-fetch.component.html',
    styleUrls: ['./servicios-fetch.component.css']
})
/** servicios-fetch component*/
export class ServiciosFetchComponent {
    /** servicios-fetch ctor */
    public serviceList: ServicioData[];




    constructor(public http: Http, private _router: Router, private _traductorService: TraductorService) {

        this.getServices();
    }

    getServices() {
        this._traductorService.getServices().subscribe(
            data => this.serviceList = data
        )
    }

}


interface ServicioData {
    Servicio: string;
}