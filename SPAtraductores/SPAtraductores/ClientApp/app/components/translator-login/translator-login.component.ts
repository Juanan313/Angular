import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { TraductorService } from '../../services/traductorservice.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { IdService } from '../../Services/id.service';

@Component({
    selector: 'translator-login',
    templateUrl: './translator-login.component.html',
    styleUrls: ['./translator-login.component.css']
})
/** translator-login component*/
export class TranslatorLoginComponent implements OnInit {
    /** translator-login ctor */
    public usuario: string;
    constructor(public http: Http, private _router: Router, private _traductorService: TraductorService, private data: IdService) {
        
    }

    id: number;

    ngOnInit() {
        this.data.currentId.subscribe(id => this.id = id)
    }

    newId(id) {
        this.data.changeID(id);
    }

    login(user, pass) {
        usuario = user.value;
        var contraseña = pass.value;
        alert("Usuario: " + usuario + ", Contraseña: " + contraseña);
        
        //this.getId(usuario);
        this.newId(10003);
        this.goToProfile();
        

       
    
    }

    goToProfile() {
        this._router.navigate(['/perfil-page']);
    }

    getId(user) {
        var usuario = user.value;
        this._traductorService.getTraductorId(usuario).subscribe(
            data => this.id = data
        )

    }

    
}

export var usuario;

interface idNumberDATA {
    ID: number;
}