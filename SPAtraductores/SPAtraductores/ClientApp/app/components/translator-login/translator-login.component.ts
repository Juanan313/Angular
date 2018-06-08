import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { TraductorService } from '../../services/traductorservice.service';

@Component({
    selector: 'translator-login',
    templateUrl: './translator-login.component.html',
    styleUrls: ['./translator-login.component.css']
})
/** translator-login component*/
export class TranslatorLoginComponent {
    /** translator-login ctor */
    public idNumber: number;
    public usuario: string;
    public contraseña: string;
    public logFail: boolean;
    constructor(public http: Http, private _router: Router, private _traductorService: TraductorService) {
        this.logFail = false;
    }

    login(user, pass) {
        usuario = user.value;
        contraseña = pass.value;
        //alert("Usuario: " + usuario + ", Contraseña: " + contraseña);

        this._traductorService.getTraductorId(usuario, contraseña).subscribe(
            data => {
                this.idNumber = data;
                if (this.idNumber > 0) {
                    this.logFail = false;
                    this.goToProfile();
                } else {
                    this.logFail = true;
                }
            }
        )

    }

    goToProfile() {
        this._router.navigate(['/perfil-page']);
    }

    //getId(usuario) {
    //    this._traductorService.getTraductorId(usuario).subscribe(
    //        data => this.idNumber = data
    //    )
    //}

    message() {
        alert(this.idNumber);
    }
}

export var idNumber;
export var usuario;
export var contraseña;

