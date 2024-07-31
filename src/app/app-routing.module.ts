import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroLoginComponent } from './components/registro-login/registro-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { ClientesVehiculosComponent } from './components/clientes-vehiculos/clientes-vehiculos.component';
import { CitasRecordatoriosComponent } from './components/citas-recordatorios/citas-recordatorios.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroLoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ordenes', component: OrdenesComponent },
  { path: 'clientes', component: ClientesVehiculosComponent },
  { path: 'citas', component: CitasRecordatoriosComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'administracion', component: AdministracionComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  { path: 'sidenav', component: SidenavComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
