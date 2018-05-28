import { Component, NgModule, Input } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchTraductorComponent } from '../fetchtraductor/fetchtraductor.component';
import { TraductorService } from '../../services/traductorservice.service';
import { validateConfig } from '@angular/router/src/config';
import { BrowserModule } from '@angular/platform-browser';
import { Peticion } from '../../Models/Peticion';
import { usuario } from '../translator-login/translator-login.component';
import { servicio } from '../home/home.component';

@Component({
    selector: 'app-add-request',
    templateUrl: './add-request.component.html',
    styleUrls: ['./add-request.component.css']
})

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
/** AddRequest component*/
export class AddRequestComponent {

    public titulo: string;
    public request: Peticion;

    // Input data
    @Input() nombre: string;
    @Input() email: string;
    @Input() idioma: string;
    @Input() servicio: string;

    /** AddRequest ctor */
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _traductorService: TraductorService, private _router: Router) {
        this.titulo = "Add a Request"
        this.request = new Peticion(0, 0, 0, "", "", "", 0);
    }

    onSubmit() {
        console.log(this.request);
    }


    probar() {
        alert(
            "Petición para: " + this.nombre+", con Email: "+this.email+", Servicio: " + this.servicio +", Idioma: "+this.idioma+"."
        );
    }
}