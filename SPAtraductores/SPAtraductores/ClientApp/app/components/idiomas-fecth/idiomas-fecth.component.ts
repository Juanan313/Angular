import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { TraductorService } from '../../services/traductorservice.service';

@Component({
    selector: 'idiomas-fecth',
    templateUrl: './idiomas-fecth.component.html',
    styleUrls: ['./idiomas-fecth.component.css']
})
/** idiomasFecth component*/
export class IdiomasFecthComponent {
    /** idiomasFecth ctor */
    public lenguageList: IdiomaData[];

    constructor(public http: Http, private _router: Router, private _traductorService: TraductorService) {
        this.getLanguages();
    }
    

    getLanguages() {
        this._traductorService.getLanguages().subscribe(
            data => this.lenguageList = data
        )
    }  
}



interface IdiomaData {
    Idioma: string;
}