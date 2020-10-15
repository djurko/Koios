import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SettlementsComponent = class SettlementsComponent {
    constructor(api, route) {
        this.api = api;
        this.route = route;
        this.displayedColumns = ['name', 'zipCode', 'country'];
        this.data = [];
        this.count = 0;
        this.isLoadingResults = true;
    }
    ngOnInit() {
        //console.log(this.route.queryParams);
        //this.route.queryParams
        //  .subscribe(x =>
        //    this.api.getSettlements(x.page || 1)
        //    .subscribe(res => {
        //      this.data = res;
        //      console.log(this.data);
        //      this.isLoadingResults = false;
        //    }, err => {
        //      console.log(err);
        //      this.isLoadingResults = false;
        //    }));
        this.api.getSettlementsCount()
            .subscribe(res => {
            this.count = res;
            console.log(this.count);
        }, err => {
            console.log(err);
        });
        this.api.getSettlements()
            .subscribe(res => {
            this.data = res;
            console.log(this.data);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
SettlementsComponent = __decorate([
    Component({
        selector: 'app-settlements',
        templateUrl: './settlements.component.html',
        styleUrls: ['./settlements.component.css']
    })
], SettlementsComponent);
export { SettlementsComponent };
//# sourceMappingURL=settlements.component.js.map