import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-settlement-add',
  templateUrl: './settlement-add.component.html',
  styleUrls: ['./settlement-add.component.css']
})
export class SettlementAddComponent implements OnInit {

  settlementForm: FormGroup;
  settlementId: number = null;
  name: string = '';
  zipCode: string = '';
  countryId: number = null;
  isLoadingResults = false;
  countries = [];

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

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

  onFormSubmit(form: NgForm) {
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

}
