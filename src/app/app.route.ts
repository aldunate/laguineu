import { Component, OnInit, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './auth/registro/registro.component';
import { MainComponent } from './main/main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { CreaMonitorComponent } from './monitor/crea-monitor/crea-monitor.component';
import { EditarMonitorComponent } from './monitor/editar-monitor/editar-monitor.component';
import { EditarEscuelaComponent } from './escuela/editar-escuela/editar-escuela.component';
import { NuevaEscuelaComponent } from './escuela/nueva-escuela/nueva-escuela.component';
import { GestionEscuelaComponent } from './escuela/gestion-escuela/gestion-escuela.component';
import { NuevaClaseComponent } from './clase/nueva-clase/nueva-clase.component';
import { ClienteComponent } from './cliente/cliente/cliente.component';
import { MonitoresComponent } from './monitor/monitores/monitores.component';
import { LoginActivate } from './auth/service/login-activate.interceptor';
import { LoginLayoutComponent } from './util/layout/login.layout';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './util/layout/home.layout';


declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'main', title: 'Main', icon: 'dashboard', class: '' },
  { path: 'monitores', title: 'Monitores', icon: 'notifications', class: '' },
  { path: 'escuela', title: 'Escuela', icon: 'notifications', class: '' },
  { path: 'gestion-escuela', title: 'Gestion escuela', icon: 'notifications', class: '' }
];

const appRoutes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'crea-monitor', component: CreaMonitorComponent },
  { path: 'monitores', component: MonitoresComponent, canActivate: [LoginActivate] },
  { path: 'monitor/:id', component: EditarMonitorComponent },
  { path: 'escuela', component: EditarEscuelaComponent },
  { path: 'gestion-escuela', component: GestionEscuelaComponent },
  { path: 'nueva-escuela', component: NuevaEscuelaComponent },
  { path: 'clase', component: NuevaClaseComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'main', component: MainComponent },
  { path: '**', component: MainComponent },
  /*{
    path: '', component: HomeLayoutComponent, canActivate: [LoginActivate], children: []
  },*/
  {
    path: '',
    component: LoginComponent, outlet: 'loginOutlet',
    children: [
      { path: 'login', component: LoginComponent, outlet: 'loginOutlet' }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class Route { }
