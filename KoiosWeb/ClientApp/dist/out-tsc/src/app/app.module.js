import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, MatIconModule, MatButtonModule, MatCardModule, MatFormFieldModule } from "@angular/material";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettlementsComponent } from './settlements/settlements.component';
import { SettlementDetailsComponent } from './settlement-details/settlement-details.component';
import { SettlementAddComponent } from './settlement-add/settlement-add.component';
import { SettlementEditComponent } from './settlement-edit/settlement-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            SettlementsComponent,
            SettlementDetailsComponent,
            SettlementAddComponent,
            SettlementEditComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpClientModule,
            AppRoutingModule,
            ReactiveFormsModule,
            BrowserAnimationsModule,
            MatInputModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule,
            MatProgressSpinnerModule,
            MatIconModule,
            MatButtonModule,
            MatCardModule,
            MatFormFieldModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map