import { Component, Inject } from '@angular/core';  
import { Http, Headers } from '@angular/http';  
import { Router, ActivatedRoute } from '@angular/router';  
import { TraductorService } from '../../services/traductorservice.service'  
@Component({  
    selector: 'FetchTraductorComponent',  
    templateUrl: './fetchtraductor.component.html'  
})  
export class FetchTraductorComponent {  
    public tradList: TraductorData[];  
    constructor(public http: Http, private _router: Router, private _traductorService: TraductorService) {  
        this.getTraductors();  
    }  
    getTraductors() {  
        this._traductorService.getTraductors().subscribe(  
            data => this.tradList = data  
        )  
    }  
    delete(traductorID) {  
        var ans = confirm("Do you want to delete customer with Id: " + traductorID);  
        if (ans) {  
            this._traductorService.deleteTraductor(traductorID).subscribe((data) => {  
                this.getTraductors();  
            }, error => console.error(error))   
        }  
    }  
}  
interface TraductorData {  
    idTraductores: number;  
    Emial: string;  
    Usuario: string;  
    Pass: string;  
    Name: string;
    LastName: string;
    CP: number;
    Tlfn: number;
}