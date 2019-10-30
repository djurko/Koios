import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-settlement-edit',
  templateUrl: './settlement-edit.component.html',
  styleUrls: ['./settlement-edit.component.css']
})
export class SettlementEditComponent implements OnInit {

  settlementForm: FormGroup;
  settlementId:number=null;
  name:string='';
  zipCode:string='';
  countryId:number=null;
  isLoadingResults = false;
  countries = [];

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getAllCountries();
    this.getSettlement(this.route.snapshot.params['id']);
    this.settlementForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'zipCode' : [null, Validators.required],
      'countryId' : [null, Validators.required]
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

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.updateSettlement(this.settlementId, form)
      .subscribe(() => {
          this.isLoadingResults = false;
          this.router.navigate(['/settlements']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  settlementDetails() {
    this.router.navigate(['/settlement-details', this.settlementId]);
  }

}
