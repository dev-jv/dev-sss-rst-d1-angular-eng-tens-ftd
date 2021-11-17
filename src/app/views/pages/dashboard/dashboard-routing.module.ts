import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const childrenRoutes: Routes = [
  { path: '', redirectTo: 'tenses', pathMatch: 'full' },
  {
    path: 'tenses',
    loadChildren: () => import('./tenses/tenses.module').then(m => m.TensesModule)
  },
];

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: childrenRoutes
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
