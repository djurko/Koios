import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let SettlementEditComponent = class SettlementEditComponent {
    constructor(router, route, api, formBuilder) {
        this.router = router;
        this.route = route;
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
        this.getSettlement(this.route.snapshot.params['id']);
        this.settlementForm = this.formBuilder.group({
            'name': [null, Validators.required],
            'zipCode': [null, Validators.required],
            'countryId': [null, Validators.required]
        });
    }
    getSettlement(id) {
        this.api.getSettlement(id).subscribe(data => {
            this.settlementId = data.settlementId;
            this.settlementForm.setValue({
                name: data.name,
                zipCode: data.zipCode,
                countryId: data.countryId
            });
        });
    }
    getAllCountries() {
        this.api.getCountries().subscribe(data => {
            this.countries = data;
        });
    }
    onFormSubmit(form) {
        this.isLoadingResults = true;
        this.api.updateSettlement(this.settlementId, form)
            .subscribe(() => {
            this.isLoadingResults = false;
            this.router.navigate(['/settlements']);
        }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    settlementDetails() {
        this.router.navigate(['/settlement-details', this.settlementId]);
    }
};
SettlementEditComponent = __decorate([
    Component({
        selector: 'app-settlement-edit',
        templateUrl: './settlement-edit.component.html',
        styleUrls: ['./settlement-edit.component.css']
    })
], SettlementEditComponent);
export { SettlementEditComponent };
//# sourceMappingURL=settlement-edit.component.js.map