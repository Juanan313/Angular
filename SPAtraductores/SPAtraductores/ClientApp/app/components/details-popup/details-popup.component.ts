import { Component, Input, OnInit } from '@angular/core';
import { TraductorService } from '../../services/traductorservice.service';

@Component({
    selector: 'app-details-popup',
    templateUrl: './details-popup.component.html',
    styleUrls: ['./details-popup.component.css']
})
/** details-popup component*/
export class DetailsPopupComponent implements OnInit {

    @Input() detailTraductor: any;
    public langList: Idioma[];
    public servList: Servicio[];

    /** details-popup ctor */
    constructor(private _traductorService: TraductorService) {
      
    }

    ngOnInit() {
        this.getIdiomasHablados()
        this.getServiciosTrad()
    }

    getIdiomasHablados() {
        this._traductorService.getIdiomasHablados(this.detailTraductor.idTraductor).subscribe(
            data => this.langList = data
        )
    }

    getServiciosTrad() {
        this._traductorService.getServiciosTrad(this.detailTraductor.idTraductor).subscribe(
            data => this.servList = data
        )
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
    bio: string;
}

interface Idioma {
    id: number;
    idioma: string;
}

interface Servicio {
    id: number;
    servicio: string;
}