import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettlementsComponent } from './settlements/settlements.component';
import { SettlementDetailsComponent } from './settlement-details/settlement-details.component';
import { SettlementAddComponent } from './settlement-add/settlement-add.component';
import { SettlementEditComponent } from './settlement-edit/settlement-edit.component';

const routes: Routes = [
  {
    path: 'settlements',
    component: SettlementsComponent,
    data: { title: 'Settlements table' }
  },
  {
    path: 'settlement-details/:id',
    component: SettlementDetailsComponent,
    data: { title: 'Settlement Details' }
  },
  {
    path: 'settlement-add',
    component: SettlementAddComponent,
    data: { title: 'Add Settlement' }
  },
  {
    path: 'settlement-edit/:id',
    component: SettlementEditComponent,
    data: { title: 'Edit Settlement' }
  },
  { path: '',
    redirectTo: '/settlements',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
