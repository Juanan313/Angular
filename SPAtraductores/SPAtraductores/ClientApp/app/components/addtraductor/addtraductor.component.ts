
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
    templateUrl: './addtraductor.component.html'
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
    title: string = "Create";
    id: number;
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _traductorService: TraductorService, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.id = this._avRoute.snapshot.params["id"];
        }
        this.traductorForm = this._fb.group({
            idTraductores: 0,
            Email: ['', [Validators.required]],
            Usuario: ['', [Validators.required]],
            Name: ['', [Validators.required]],
            Pass: ['', [Validators.required]],
            LastName: ['', [Validators.required]],
            CP: [0, [Validators.required]],
            Tlfn: [0, [Validators.required]]
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
    get Email() { return this.traductorForm.get('CorreoElectronico'); }
    get Usuario() { return this.traductorForm.get('Contrasena'); }
    get Pass() { return this.traductorForm.get('Pass'); }
    get Name() { return this.traductorForm.get('Nombre'); }
    get LastName() { return this.traductorForm.get('Apellidos'); }
    get CP () { return this.traductorForm.get('CP'); }
    get Tlfn() { return this.traductorForm.get('Tlfn'); } 
}