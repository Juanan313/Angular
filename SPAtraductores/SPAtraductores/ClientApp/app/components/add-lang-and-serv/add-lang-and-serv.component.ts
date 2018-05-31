import { Component, NgModule, Input, AfterContentInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TraductorService } from '../../services/traductorservice.service'
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Directive } from '@angular/core/src/metadata/directives';
import { idioma, servicio } from '../home/home.component';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { PerfilPageComponent } from '../perfil-page/perfil-page.component';

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
export class AddLangAndServComponent implements OnInit {

    public lenguageList: IdiomaData[];
    public serviceList: ServicioData[];
    public langTalkList: IdiomaData[];
    public servWorkList: ServicioData[];
    public insert: Boolean;

    @Input() id: number;

    /** addLangAndServ ctor */
    constructor(public http: Http, private _avRoute: ActivatedRoute, private _router: Router, private _traductorService: TraductorService, private _profileService: PerfilPageComponent) {

        if (this._avRoute.snapshot.params["id"]) {
            this.insert = true;
            this.id = this._avRoute.snapshot.params["id"];
        }

        this.refreshData();
        
    }

    ngOnInit() {
       
    }

    //ngAfterContentInit() {
    //    if (!this.insert) {
    //        this.chargeLangServ();
    //    }
        
    //}

    // Carga lista de todos los servicios que ofrece el traductor
    getServicesWork() {
        this._traductorService.getServiciosTrad(this.id).subscribe(
            data => {
                this.servWorkList = data;
                this.chargeServices();
                
                
            }
        )
    }

    // Carga lista de todos los idiomas hablados por el traductor
    getLanguagesTalk() {
        this._traductorService.getIdiomasHablados(this.id).subscribe(
            data => {
                this.langTalkList = data;
                this.chargeLanguages();

            }
        )
    }

     // Carga lista de todos los servicios que tenemos en la base de datos para lista checkbox
    getServices() {
        this._traductorService.getServices().subscribe(
            data => {
                this.serviceList = data;
                this.getServicesWork();
            }
        )
    }

    // Carga lista de todos los idiomas que tenemos en la base de datos para lista checkbox
    getLanguages() {
        this._traductorService.getLanguages().subscribe(
            data => {
                this.lenguageList = data;
                this.getLanguagesTalk();
            }
        )
    }

    // Encapsula la llamada a ambas funciones
    chargeLangServ() {
        this.chargeLanguages();
        this.chargeServices();
    }

    // Carga las lista de servicios que ofrece el traductor en los checkbox
    chargeServices() {

        var checkboxServ = <any>document.getElementsByClassName("chkbxservicio");

        // for que recorre el array de servicio del tradcutor
        for (var i = 0; i < this.servWorkList.length; i++) {


            // Encapsulo id del servicio del traductor
            var idServ = this.servWorkList[i].id;
            //console.log("Id Serv: " + idServ);


            // for que recorre los checkbox de servicios (todos)
            for (var j = 0; j < checkboxServ.length; j++) {

                //encapsulo el id del servicio del checkbox
                var checkbox = checkboxServ[j];
                //console.log("CheckBox id:" + checkbox);

                // Compoaracion de ids
                if (checkbox.value == idServ) {
                    checkbox.checked = true;
                }
            }
        }
    }

    // Carga las lista de idiomas hablados por el traductor en los checkbox
    chargeLanguages() {

        var checkboxLang = <any>document.getElementsByClassName("chkbxidioma");

        // for que recorre el array de servicio del tradcutor
        for (var i = 0; i < this.langTalkList.length; i++) {


            // Encapsulo id del servicio del traductor
            var idLang = this.langTalkList[i].id;
            //console.log("Id Serv: " + idLang);


            // for que recorre los checkbox de servicios (todos)
            for (var j = 0; j < checkboxLang.length; j++) {

                //encapsulo el id del servicio del checkbox
                var checkbox = checkboxLang[j];
                //console.log("CheckBox id:" + checkbox);

                // Compoaracion de ids
                if (checkbox.value == idLang) {
                    checkbox.checked = true;
                }
            }
        }
    }

    prepareInsert() {

        this._traductorService.deleteLangServFromTrad(this.id).subscribe(data => {

            this.addLangServ();
            
        }, error => console.error(error)) 

}

    // Añade los idiomas y servicios seleccionados al traductor
     addLangServ() {
        if ( this.id == 0 ) {
            return false;
        } 

        var idiomas = <any>document.getElementsByClassName('chkbxidioma');
        var servicios = <any>document.getElementsByClassName('chkbxservicio');

        for (var i = 0; i < idiomas.length; i++) {
            var idioma = idiomas[i];

            if (idioma.checked) {

                let objToSend = {
                    "idIdioma": idioma.value,
                    "idTraductor": this.id
                }

                this._traductorService.saveTraductorIdioma(objToSend).subscribe((data) => { });
            }
        }

        for (var i = 0; i < servicios.length; i++) {
            var servicio = servicios[i];

            if (servicio.checked) {

                let objToSend = {
                    "idServicio": servicio.value,
                    "idTraductor": this.id
                }

                this._traductorService.saveTraductorServicios(objToSend).subscribe((data) => { });
            }
           
        }

         if (this.insert) {
             this._router.navigate(['/admin-page']);
         } else {
             this.refreshData();
             this._profileService.getIdiomasHablados();
             this._profileService.getServiciosTrad();
             this._profileService.mostrar();
         }
        

    }

    // Actualiza los datos según el perfil
    refreshData() {

        this.getLanguages();
        this.getServices();

    }


    // Borra todos los registros de idioma y servicios del traductor
    deleteAll() {
    
            this._traductorService.deleteLangServFromTrad(this.id).subscribe((data) => {
                this.refreshData();
            }, error => console.error(error))
 
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
