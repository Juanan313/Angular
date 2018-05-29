
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
            email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")]],
            usuario: ['', [Validators.required, Validators.pattern("^([a-zA-Z0-9]+){6,}$")]],
            name: ['', [Validators.required]],
            pass: ['', [Validators.required, Validators.pattern("^([a-zA-Z0-9]+){6,}$")]],
            lastName: ['', [Validators.required]],
            cp: ['', [Validators.required]],
            tlfn: ['', [Validators.required]],
            //img: ['', [Validators.required]]
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
        if (this.title == "Create an Account") {
            this._traductorService.saveTraductor(this.traductorForm.value)
                .subscribe((data) => {
                    this.loadId();
                }, error => this.errorMessage = error)
        }
        else if (this.title == "Edit") {
            this._traductorService.updateTraductor(this.traductorForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/admin-page']);
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
        this._router.navigate(['/admin-page']);
    }
    get email() { return this.traductorForm.get('email'); }
    get usuario() { return this.traductorForm.get('usuario'); }
    get pass() { return this.traductorForm.get('pass'); }
    get name() { return this.traductorForm.get('name'); }
    get lastname() { return this.traductorForm.get('lastname'); }
    get cp () { return this.traductorForm.get('cp'); }
    get tlfn() { return this.traductorForm.get('tlfn'); } 
}