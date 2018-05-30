import { Component, Inject } from '@angular/core';  
import { Http, Headers } from '@angular/http';  
import { Router, ActivatedRoute } from '@angular/router';  
import { TraductorService } from '../../services/traductorservice.service'  
@Component({  
    selector: 'FetchTraductorComponent',  
    templateUrl: './fetchtraductor.component.html',
    styleUrls: ['./fetchtraductor.component.css']
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
    delete(idTraductores) {  
        var ans = confirm("Do you want to delete customer with Id: " + idTraductores);  
        if (ans) {  
            this._traductorService.deleteTraductor(idTraductores).subscribe((data) => {  
                this.getTraductors();  
            }, error => console.error(error))   
        }  
    }  
}  
interface TraductorData {  
    id: number;  
    email: string;  
    usuario: string;  
    pass: string;  
    name: string;
    lastname: string;
    cp: number;
    tlfn: number;
    imagen: string;
}