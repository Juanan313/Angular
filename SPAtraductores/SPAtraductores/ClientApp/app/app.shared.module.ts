import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { createtraductor } from './components/addtraductor/addtraductor.component';
import { FetchTraductorComponent } from './components/fetchtraductor/fetchtraductor.component'
import { TraductorService } from './Services/traductorService.service';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        createtraductor,
        FetchTraductorComponent
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
            { path: 'Traductor/edit/:usuario', component: createtraductor },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [TraductorService]
})
export class AppModuleShared {
}
