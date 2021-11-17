import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TensesComponent } from './tenses.component';

const routes: Routes = [
  { path: '', component: TensesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TensesRoutingModule { }
