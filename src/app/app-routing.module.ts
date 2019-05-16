import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { AppComponent } from './app.component';
import { ListComponent } from './admin/list/list.component';
import { ParkingListComponent } from './admin/parking-list/parking-list.component';
import { ParkingAjouterComponent } from './admin/parking-ajouter/parking-ajouter.component';
import { ReservationComponent } from './admin/reservation/reservation.component';
import { ModifierComponent } from './admin/modifier/modifier.component';
import { ModifierParkingComponent } from './admin/modifier-parking/modifier-parking.component';




const routes: Routes = [{ path:  'admin',
component :AppComponent ,
children: [
  
  { path:  'login',component:  LoginComponent},
  { path:  'list',component:  ListComponent},
  { path:  'list-parking',component:  ParkingListComponent},
  { path:  'ajouter-parking',component:  ParkingAjouterComponent},
  { path:  'modifier/:id',component:  ModifierComponent},
  { path:  'modifier-parking/:id',component:  ModifierParkingComponent},
  { path:  'reservation/:id', component:ReservationComponent}
] },
{path:'', redirectTo:'admin/login',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
