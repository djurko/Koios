import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let SettlementAddComponent = class SettlementAddComponent {
    constructor(router, api, formBuilder) {
        this.router = router;
        this.api = api;
        this.formBuilder = formBuilder;
        this.settlementId = null;
        this.name = '';
        this.zipCode = '';
        this.countryId = null;
        this.isLoadingResults = false;
        this.countries = [];
    }
    ngOnInit() {
        this.getAllCountries();
        this.settlementForm = this.formBuilder.group({
            'settlementId': [0],
            'name': [null, Validators.required],
            'zipCode': [null, Validators.required],
            'countryId': [null, Validators.required]
        });
    }
    getAllCountries() {
        this.api.getCountries().subscribe(data => {
            this.countries = data;
        });
    }
    onFormSubmit(form) {
        this.isLoadingResults = true;
        this.api.addSettlement(form)
            .subscribe(() => {
            this.isLoadingResults = false;
            this.router.navigate(['/settlements']);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
};
SettlementAddComponent = __decorate([
    Component({
        selector: 'app-settlement-add',
        templateUrl: './settlement-add.component.html',
        styleUrls: ['./settlement-add.component.css']
    })
], SettlementAddComponent);
export { SettlementAddComponent };
//# sourceMappingURL=settlement-add.component.js.map