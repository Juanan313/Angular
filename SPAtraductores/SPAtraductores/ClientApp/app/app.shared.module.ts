import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

/* --- Mis imports --- */
// POPUPS
import { PopupModule } from 'ng2-opd-popup';

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
import { TraductorByCpComponent } from './components/traductor-by-cp/traductor-by-cp.component';
import { PerfilPageComponent } from './components/perfil-page/perfil-page.component';
import { AddLangAndServComponent } from './components/add-lang-and-serv/add-lang-and-serv.component';
import { AddRequestComponent } from './components/add-request/add-request.component';
import { PruebasPoupComponent } from './components/pruebas-poup/pruebas-poup.component';
import { DetailsPopupComponent } from './components/details-popup/details-popup.component';

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
        ServiciosFetchComponent,
        TraductorByCpComponent,
        PerfilPageComponent,
        AddLangAndServComponent,
        AddRequestComponent,
        PruebasPoupComponent,
        DetailsPopupComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        PopupModule.forRoot(),
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'fetch-traductor', component: FetchTraductorComponent },
            { path: 'register-Traductor', component: createtraductor },
            { path: 'Traductor/edit/:id', component: createtraductor },
            { path: 'translator-login', component: TranslatorLoginComponent },
            { path: 'admin-page', component: AdminPageComponent },
            { path: 'servicios-fetch', component: ServiciosFetchComponent },
            { path: 'idiomas-fetch', component: IdiomasFecthComponent },
            { path: 'traductor-bycp', component: TraductorByCpComponent },
            { path: 'perfil-page', component: PerfilPageComponent },
            { path: 'perfil-page/:id', component: PerfilPageComponent },
            { path: 'addLang-Serv', component: AddLangAndServComponent },
            { path: 'addLang-Serv/:id', component: AddLangAndServComponent },
            { path: 'addRequest', component: AddRequestComponent },
            { path: 'details-popup', component: DetailsPopupComponent },
            { path: '**', redirectTo: 'home' },

            
        ])
    ],
    providers: [TraductorService,
        PerfilPageComponent]

})
export class AppModuleShared {
}
