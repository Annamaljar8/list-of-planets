import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsComponent }      from './planets/planets.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { PlanetDetailComponent }  from './planet-detail/planet-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:i', component: PlanetDetailComponent },
  { path: 'planets', component: PlanetsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
