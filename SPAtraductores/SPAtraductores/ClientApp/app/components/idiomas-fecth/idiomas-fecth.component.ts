import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { TraductorService } from '../../services/traductorservice.service';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, Validators } from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormGroup } from '@angular/forms/src/model';

@Component({
    selector: 'idiomas-fetch',
    templateUrl: './idiomas-fecth.component.html',
    styleUrls: ['./idiomas-fecth.component.css']
})
/** idiomasFecth component*/
export class IdiomasFecthComponent implements OnInit {
    ngOnInit(): void {
        
    }
    errorMessage: any;
    /** idiomasFecth ctor */
    public lenguageList: IdiomaData[];
    languageForm: FormGroup;

    constructor(private _fb: FormBuilder,public http: Http, private _router: Router, private _traductorService: TraductorService) {
        this.getLanguages();
    }

    langagueForm = this._fb.group({ 
        idioma: ['',[Validators.required]]
})

    getLanguages() {
        this._traductorService.getLanguages().subscribe(
            data => this.lenguageList = data
        )
    }S

    save() {
        this._traductorService.saveLanguage(this.languageForm.value)
            .subscribe((data) => {
                this._router.navigate(['/admin-page']);
            }, error => this.errorMessage = error)
    }
}



interface IdiomaData {
    Idioma: string;
}