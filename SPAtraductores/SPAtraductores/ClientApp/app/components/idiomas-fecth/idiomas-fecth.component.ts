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
    selector: 'idiomas-fetch',
    templateUrl: './idiomas-fecth.component.html',
    styleUrls: ['./idiomas-fecth.component.css']
})

@NgModule({
    /*and add it to the imports array here*/
    imports: [FormsModule, CommonModule],
    declarations: [IdiomasFecthComponent],
    exports: [],
    providers: [],
})
/** idiomasFecth component*/
export class IdiomasFecthComponent {
 
    errorMessage: any;
    /** idiomasFecth ctor */
    public lenguageList: IdiomaData[];
    languageForm: FormGroup;

    constructor(private _fb: FormBuilder, public http: Http, private _router: Router, private _traductorService: TraductorService) {
        this.getLanguages();
        this.languageForm = this._fb.group({
            lenguage: ['', [Validators.required]]
        })
    }

    getLanguages() {
        this._traductorService.getLanguages().subscribe(
            data => this.lenguageList = data
        )
    }

    save() {
        if (!this.languageForm.valid) {
            console.log("no es valido");
            return;
        }

        this._traductorService.saveLanguage(this.languageForm.value)
            .subscribe((data) => {
                this._router.navigate(['/admin-page']);
            }, error => this.errorMessage = error)

        this.refresh();
    }

    refresh(): void {
        window.location.reload();
    }

    get lenguage() { return this.languageForm.get('lenguage'); }
}



interface IdiomaData {
    Idioma: string;
}