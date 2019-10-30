import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettlementsComponent } from './settlements/settlements.component';
import { SettlementDetailsComponent } from './settlement-details/settlement-details.component';
import { SettlementAddComponent } from './settlement-add/settlement-add.component';
import { SettlementEditComponent } from './settlement-edit/settlement-edit.component';
const routes = [
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
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map