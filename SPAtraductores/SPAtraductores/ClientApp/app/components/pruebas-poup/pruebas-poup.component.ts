import { Component, ViewChild } from '@angular/core';
import { Popup } from 'ng2-opd-popup';

@Component({
    selector: 'app-pruebas-poup',
    templateUrl: './pruebas-poup.component.html',
    styleUrls: ['./pruebas-poup.component.css']
})
/** pruebasPoup component*/
export class PruebasPoupComponent {

    @ViewChild('popup1') popup1: Popup;
    @ViewChild('popup2') popup2: Popup;
    @ViewChild('popup3') popup3: Popup;


    /** pruebasPoup ctor */
    constructor() {

    }

    lanzarPopup1() {
        this.popup1.show();
    }
    lanzarPopup2() {
        this.popup2.show();
    }
    lanzarPopup3() {
        this.popup3.show();
    }


}