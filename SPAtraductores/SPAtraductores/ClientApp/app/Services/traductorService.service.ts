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

    getTraductorId(usuario: string, contraseña: string) {
        return this._http.get(this.myAppUrl + "api/Traductor/DetailsID/" + usuario +","+contraseña)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    } 

    
    getTraductorByCP(CP: String) {
        return this._http.get(this.myAppUrl + "api/Traductor/DetailsCP/" + CP)
    .map((response: Response) => response.json())
    .catch(this.errorHandler)
    }

    getRequestForTranslator(idTraductor: number) {
        return this._http.get(this.myAppUrl + "api/Peticion/Pendiente/"+  idTraductor)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    getTraductorsDatos(CP: string, idioma: string, servicio: string) {
        return this._http.get(this.myAppUrl + "api/Traductor/DetailsDatos/" + CP + ","+idioma+"," + servicio)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    getIdiomasHablados(id: number) {
        return this._http.get(this.myAppUrl + 'api/Traductor/Languages/' + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);  
    }

    getServiciosTrad(id: number) {
        return this._http.get(this.myAppUrl + 'api/Traductor/Services/' + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getTranslatorBio(id: number) {
        return this._http.get(this.myAppUrl + 'api/Traductor/Bio/' + id)
            .map((response: Response) => response)
            .catch(this.errorHandler);
    }


    // SAVES NEW DATA

    saveTraductor(traductor) {  
        return this._http.post(this.myAppUrl + 'api/Traductor/Create', traductor)  
            .map((response: Response) => response.json())  
            .catch(this.errorHandler)  
    }

    // añadir Idioma
    saveLanguage(language) {
        return this._http.post(this.myAppUrl + 'api/Idioma/Create', language)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)  
    }

    // añadirServicio
    saveService(service) {
        return this._http.post(this.myAppUrl + 'api/Servicio/Create', service)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)  
    }

    // añadir Peticion
    saveRequest(request) {
        return this._http.post(this.myAppUrl + 'api/Peticion/Create', request)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)  
    }

    // Añadir Biografia
    saveBio(bio) {
        return this._http.post(this.myAppUrl + 'api/Traductor/CreateBio', bio)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    //Añadir servicio a traductor
    saveTraductorServicios(body: any) {
        return this._http.post(this.myAppUrl + 'api/Traductor/CreateServicio',body)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    //Añadir idioma a un traductor
    saveTraductorIdioma(body: any) {
        return this._http.post(this.myAppUrl + 'api/Traductor/CreateIdioma', body)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    // UPDATE DATA
    updateTraductor(traductor) {  
        return this._http.put(this.myAppUrl + 'api/Traductor/Edit', traductor)  
            .map((response: Response) => response.json())  
            .catch(this.errorHandler);  
    }  

    updateTraductorBio(bio) {
        return this._http.put(this.myAppUrl + 'api/Traductor/Bio/Edit', bio)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }


    // DELETE DATA
    deleteTraductor(id) {  
        return this._http.delete(this.myAppUrl + "api/Traductor/Delete/" + id)  
            .map((response: Response) => response.json())  
            .catch(this.errorHandler);  
    }  

    deleteLanguage(idioma) {
        return this._http.delete(this.myAppUrl + "api/Idioma/Delete/" + idioma)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    deleteService(servicio) {
        return this._http.delete(this.myAppUrl + "api/Service/Delete/" + servicio)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    } 

    deleteLangServFromTrad(idTraductor) {
        return this._http.delete(this.myAppUrl + "api/Traducotr/DeleteLangServ/" + idTraductor)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }


    // ERROR HANDLER
    errorHandler(error: Response) {  
        console.log(error);  
        return Observable.throw(error);  
    }  
}