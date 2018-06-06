﻿
import { Component, OnInit, NgModule } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchTraductorComponent } from '../fetchtraductor/fetchtraductor.component';
import { TraductorService } from '../../services/traductorservice.service';
import { validateConfig } from '@angular/router/src/config';
import { BrowserModule } from '@angular/platform-browser';
@Component({
    selector: 'createtraductor',
    templateUrl: './addtraductor.component.html',
    styleUrls: ['./addtraductor.component.css']
})
@NgModule({
    imports: [
        BrowserModule, 
        FormsModule,
        ReactiveFormsModule
    ]
})
export class createtraductor implements OnInit {
    traductorForm: FormGroup;
    title: string = "Create an Account";
    id: number;
    errorMessage: any;
    imagenList: any[];
    imgvalue: any;



    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _traductorService: TraductorService, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.id = this._avRoute.snapshot.params["id"];
        }
        this.traductorForm = this._fb.group({
            id: 0,
            email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")]],
            usuario: ['', [Validators.required, Validators.pattern("^([a-zA-Z0-9]+){6,}$")]],
            name: ['', [Validators.required]],
            pass: ['', [Validators.required, Validators.pattern("^([a-zA-Z0-9]+){6,}$")]],
            lastName: ['', [Validators.required]],
            cp: ['', [Validators.required]],
            tlfn: ['', [Validators.required]],
            imagen: ['', [Validators.required]]
        })


        this.imagenList = [
            "data:image/jpeg;base64,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",
            "data:image/jpeg;base64,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",
            "data:image/jpeg;base64,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",
            "data:image/jpeg;base64,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",
            "data:image/jpeg;base64,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",
            "data:image/jpeg;base64,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",
            "data:image/jpeg;base64,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",
            "data:image/jpeg;base64,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",
            "data:image/jpeg;base64,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",
            "data:image/jpeg;base64,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"];



    }


    ngOnInit() {
        if (this.id > 0) {
            this.title = "Edit";
            this._traductorService.getTraductorById(this.id)
                .subscribe(resp => this.traductorForm.setValue(resp)
                , error => this.errorMessage = error);
        }
    }

    save() {
        if (!this.traductorForm.valid) {
            return;
        }
        if (this.title == "Create an Account") {
            this._traductorService.saveTraductor(this.traductorForm.value)
                .subscribe((data) => {
                    this.loadId();
                }, error => this.errorMessage = error)
        }
        else if (this.title == "Edit") {
            this._traductorService.updateTraductor(this.traductorForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/perfil-page/', this.id]);
                }, error => this.errorMessage = error)
        }
    }

    loadId() {
        this._traductorService.getTraductorId(this.traductorForm.value.usuario).subscribe(
            data => {
                var id = data;
                this._router.navigate(['/addLang-Serv/', id]);
            }
        )

    }

    cancel() {
        if (this.title == "Create an Account") {
            this._router.navigate(['/home']);
        } else {
            this._router.navigate(['/perfil-page/', this.id]);
        }
 
    }
    changeListener($event): void {

        this.readThis($event.target);

    }

    readThis(inputValue: any): void {
        var file: File = inputValue.files[0];

        var myReader: FileReader = new FileReader();

        myReader.onloadend = (e) => {

            this.imgvalue = myReader.result;
            this.traductorForm.value.imagen = this.imgvalue;
        }
        myReader.readAsDataURL(file);

    }

    cargaimg() {
        this.imgvalue = this.traductorForm.value.imagen;
    }

    get email() { return this.traductorForm.get('email'); }
    get usuario() { return this.traductorForm.get('usuario'); }
    get pass() { return this.traductorForm.get('pass'); }
    get name() { return this.traductorForm.get('name'); }
    get lastname() { return this.traductorForm.get('lastname'); }
    get cp () { return this.traductorForm.get('cp'); }
    get tlfn() { return this.traductorForm.get('tlfn'); }
    get imagen() { return this.traductorForm.get('img'); }
}