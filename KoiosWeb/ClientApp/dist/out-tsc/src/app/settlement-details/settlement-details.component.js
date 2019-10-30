import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let SettlementDetailsComponent = class SettlementDetailsComponent {
    constructor(route, api, router) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.settlement = { settlementId: null, name: '', zipCode: '', countryId: null, country: null };
        this.isLoadingResults = true;
    }
    ngOnInit() {
        this.getSettlementDetails(this.route.snapshot.params['id']);
    }
    getSettlementDetails(id) {
        this.api.getSettlement(id)
            .subscribe(data => {
            this.settlement = data;
            console.log(this.settlement);
            this.isLoadingResults = false;
        });
    }
    deleteSettlement(id) {
        this.isLoadingResults = true;
        this.api.deleteSettlement(id)
            .subscribe(res => {
            this.isLoadingResults = false;
            this.router.navigate(['/settlements']);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
SettlementDetailsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-settlement-details',
        templateUrl: './settlement-details.component.html',
        styleUrls: ['./settlement-details.component.css']
    })
], SettlementDetailsComponent);
export { SettlementDetailsComponent };
//# sourceMappingURL=settlement-details.component.js.map