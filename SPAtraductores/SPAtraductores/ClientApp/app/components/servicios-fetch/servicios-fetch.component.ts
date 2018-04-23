import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { TraductorService } from '../../services/traductorservice.service';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, Validators } from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup } from '@angular/forms/src/model';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'servicios-fetch',
    templateUrl: './servicios-fetch.component.html',
    styleUrls: ['./servicios-fetch.component.css']
})

@NgModule({
        /*and add it to the imports array here*/
        imports: [FormsModule, CommonModule],
        declarations: [ServiciosFetchComponent],
        exports: [],
        providers: [],
})

/** servicios-fetch component*/
export class ServiciosFetchComponent {
    /** servicios-fetch ctor */
    public serviceList: ServicioData[];
    errorMessage: any;
    serviceForm: FormGroup;


    constructor(private _fb: FormBuilder, public http: Http, private _router: Router, private _traductorService: TraductorService) {
        this.getServices();
        this.serviceForm = this._fb.group({
            service: ['', [Validators.required]]
        })
    }

    getServices() {
        this._traductorService.getServices().subscribe(
            data => this.serviceList = data
        )
    }

    save() {
        if (!this.serviceForm.valid) {
            console.log("no es valido");
            return;
        }

        this._traductorService.saveService(this.serviceForm.value).subscribe((data) => {
            this.getServices();
        }, error => this.errorMessage = error)
        this.serviceForm.reset();
        this.getServices();
        //this.refresh();
    }

    refresh(): void {
        window.location.reload();
    }



    get service() { return this.serviceForm.get('service'); }
}


interface ServicioData {
    Servicio: string;
}