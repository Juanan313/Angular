import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-details-popup',
    templateUrl: './details-popup.component.html',
    styleUrls: ['./details-popup.component.css']
})
/** details-popup component*/
export class DetailsPopupComponent {

    @Input() detailTraductor: any;
    /** details-popup ctor */
    constructor() {
        

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