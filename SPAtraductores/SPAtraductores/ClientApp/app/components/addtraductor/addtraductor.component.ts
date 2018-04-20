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
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _traductorService: TraductorService, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.id = this._avRoute.snapshot.params["id"];
        }
        this.traductorForm = this._fb.group({
            id: 0,
            email: ['', [Validators.required]],
            usuario: ['', [Validators.required]],
            name: ['', [Validators.required]],
            pass: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            cp: ['', [Validators.required]],
            tlfn: ['', [Validators.required]]
        })
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
        if (this.title == "Create") {
            this._traductorService.saveTraductor(this.traductorForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-traductor']);
                }, error => this.errorMessage = error)
        }
        else if (this.title == "Edit") {
            this._traductorService.updateTraductor(this.traductorForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-traductor']);
                }, error => this.errorMessage = error)
        }
    }
    cancel() {
        this._router.navigate(['/fetch-traductor']);
    }
    get email() { return this.traductorForm.get('email'); }
    get usuario() { return this.traductorForm.get('usuario'); }
    get pass() { return this.traductorForm.get('pass'); }
    get name() { return this.traductorForm.get('name'); }
    get lastname() { return this.traductorForm.get('lastname'); }
    get cp () { return this.traductorForm.get('cp'); }
    get tlfn() { return this.traductorForm.get('tlfn'); } 
}