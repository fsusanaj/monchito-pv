import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroLoginComponent } from './components/registro-login/registro-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BodyComponent } from './components/body/body.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { ClientesVehiculosComponent } from './components/clientes-vehiculos/clientes-vehiculos.component';
import { CitasRecordatoriosComponent } from './components/citas-recordatorios/citas-recordatorios.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroLoginComponent,
    DashboardComponent,
    SidenavComponent,
    BodyComponent,
    OrdenesComponent,
    ClientesVehiculosComponent,
    CitasRecordatoriosComponent,
    CatalogoComponent,
    VentasComponent,
    ReportesComponent,
    InventarioComponent,
    AdministracionComponent,
    ConfiguracionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
