import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { createtraductor } from './components/addtraductor/addtraductor.component';
import { FetchTraductorComponent } from './components/fetchtraductor/fetchtraductor.component'
import { TraductorService } from './services/traductorservice.service';
import { IdiomasFecthComponent } from './components/idiomas-fecth/idiomas-fecth.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { TranslatorLoginComponent } from './components/translator-login/translator-login.component';
import { ServiciosFetchComponent } from './components/servicios-fetch/servicios-fetch.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        createtraductor,
        FetchTraductorComponent,
        TranslatorLoginComponent,
        IdiomasFecthComponent,
        AdminPageComponent,
        ServiciosFetchComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'fetch-traductor', component: FetchTraductorComponent },
            { path: 'register-Traductor', component: createtraductor },
            { path: 'Traductor/edit/:id', component: createtraductor },
            { path: 'translator-login', component: TranslatorLoginComponent },
            { path: 'admin-page', component: AdminPageComponent },
            { path: 'servicios-fetch', component: ServiciosFetchComponent },          
            { path: '**', redirectTo: 'home' },

            
        ])
    ],
    providers: [TraductorService]
})
export class AppModuleShared {
}
