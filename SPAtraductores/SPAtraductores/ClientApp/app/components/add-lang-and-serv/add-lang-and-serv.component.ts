import { Component, NgModule, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TraductorService } from '../../services/traductorservice.service'
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Directive } from '@angular/core/src/metadata/directives';
import { idioma, servicio } from '../home/home.component';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'add-lang-and-serv',
    templateUrl: './add-lang-and-serv.component.html',
    styleUrls: ['./add-lang-and-serv.component.css']
})


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ]
})

/** addLangAndServ component*/
export class AddLangAndServComponent implements OnInit{

    public lenguageList: IdiomaData[];
    public serviceList: ServicioData[];
    public langTalkList: IdiomaData[];
    public servWorkList: ServicioData[];

    @Input() id: number;

    /** addLangAndServ ctor */
    constructor(public http: Http, private _router: Router, private _traductorService: TraductorService) {
        this.getLanguages();
        this.getServices();
        


        
        //var codigoPostal = "";
        //var idioma = "";
        //var servicio = "";
        
    }

    ngOnInit() {
        
    }

    getServicesWork() {
        this._traductorService.getServiciosTrad(this.id).subscribe(
            data => this.servWorkList = data
        )
    }

    getLanguagesTalk() {
        this._traductorService.getIdiomasHablados(this.id).subscribe(
            data => {
                this.langTalkList = data;
            }
        )
    }

    getServices() {
        this._traductorService.getServices().subscribe(
            data => {
                this.serviceList = data;
                this.getServicesWork();
            }
        )
    }

    getLanguages() {
        this._traductorService.getLanguages().subscribe(
            data => {
                this.lenguageList = data;
                this.getLanguagesTalk();
            }
        )
    }

    chargeLangServ() {
        //console.log("IdLangs:");
        //console.log("__________");
        //for (var i = 0; i < this.langTalkList.length; i++) {
        //    var idLang = this.langTalkList[i].id;
            
        //    console.log(idLang);
        //}
        //console.log("IdServs:");
        //console.log("__________");
        //for (var i = 0; i < this.servWorkList.length; i++) {
        //    var idServ = this.servWorkList[i].id;
            
        //    console.log(idServ);
        //}
        var checkboxServ = <any>document.getElementsByClassName("chkbxservicio");

        // for que recorre el array de servicio del tradcutor
        for (var i = 0; i < this.servWorkList.length; i++) {


            // Encapsulo id del servicio del traductor
            var idServ = this.servWorkList[i].id;
            console.log("Id Serv: " + idServ);


            // for que recorre los checkbox de servicios (todos)
            for (var j = 0; j < checkboxServ.lenght; j++) {

                //encapsulo el id del servicio del checkbox
                var checkbox = checkboxServ[j];
                console.log("CheckBox id:" + checkbox);

                // Compoaracion de ids
                if (checkbox.value == idServ) {
                    checkbox.disabled = true;
                }
            }
        }
    }




    addLangServ() {
        if ( this.id == 0 ) {
            return false;
        } 

        alert(this.id);

        var idiomas = <any>document.getElementsByClassName('chkbxidioma');
        var servicios = <any>document.getElementsByClassName('chkbxservicio');

        for (var i = 0; i < idiomas.length; i++) {
            var idioma = idiomas[i];

            if (idioma.checked) {
                this._traductorService.saveTraductorIdioma( idioma.value, this.id).subscribe((data) => { });
            }
        }

        for (var i = 0; i < servicios.length; i++) {
            var servicio = servicios[i];

            if (servicio.checked) {
                this._traductorService.saveTraductorServicios(servicio.value, this.id, ).subscribe((data) => { });
            }
           
        }

        this._router.navigate(['/perfil-page']);

        //this._traductorService.saveTraductorServicios(4, 10003).subscribe((data) => { });
        //this._traductorService.saveTraductorIdioma(1, 10003).subscribe((data) => { });
    }
   
}

// Interfaces para dar formato a los datos obtenidos de sql

interface IdiomaData {
    id: number;
    Idioma: string;
    
}

interface ServicioData {
    id: number;
    Servicio: string;
    
}
