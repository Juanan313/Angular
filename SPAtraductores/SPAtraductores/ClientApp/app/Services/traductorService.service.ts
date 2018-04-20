import { Injectable, Inject } from '@angular/core';  
import { Http, Response } from '@angular/http';  
import { Observable } from 'rxjs/Observable';  
import { Router } from '@angular/router';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';  
import 'rxjs/add/observable/throw';  
@Injectable()  
export class TraductorService {  
    myAppUrl: string = "";  
    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {  
        this.myAppUrl = baseUrl;  
    }  


    // GETTERS
    getTraductors() {  
        return this._http.get(this.myAppUrl + 'api/Traductor/Index')  
            .map((response: Response) => response.json())  
            .catch(this.errorHandler);  
    }

    getLanguages() {
        return this._http.get(this.myAppUrl + 'api/Idioma/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getServices() {
        return this._http.get(this.myAppUrl + 'api/Servicio/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getTraductorById(id: number) {  
        return this._http.get(this.myAppUrl + "api/Traductor/Details/" + id)  
            .map((response: Response) => response.json())  
            .catch(this.errorHandler)  
    } 

    // SAVES NEW DATA

    saveTraductor(traductor) {  
        return this._http.post(this.myAppUrl + 'api/Traductor/Create', traductor)  
            .map((response: Response) => response.json())  
            .catch(this.errorHandler)  
    }

    saveLanguage(language) {
        return this._http.post(this.myAppUrl + 'api/Idioma/Create', language)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)  
    }

    saveService(servicio) {
        return this._http.post(this.myAppUrl + 'api/Servicio/Create', servicio)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)  
    }


    // UPDATE DATA
    updateTraductor(traductor) {  
        return this._http.put(this.myAppUrl + 'api/Traductor/Edit', traductor)  
            .map((response: Response) => response.json())  
            .catch(this.errorHandler);  
    }  


    // DELETE DATA
    deleteTraductor(id) {  
        return this._http.delete(this.myAppUrl + "api/Traductor/Delete/" + id)  
            .map((response: Response) => response.json())  
            .catch(this.errorHandler);  
    }  


    // ERROR HANDLER
    errorHandler(error: Response) {  
        console.log(error);  
        return Observable.throw(error);  
    }  
}