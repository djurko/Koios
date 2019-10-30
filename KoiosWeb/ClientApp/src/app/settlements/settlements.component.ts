import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

import { Settlement } from '../settlement';

@Component({
  selector: 'app-settlements',
  templateUrl: './settlements.component.html',
  styleUrls: ['./settlements.component.css']
})
export class SettlementsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'zipCode', 'country'];
  data: Settlement[] = [];
  count: number = 0;
  isLoadingResults = true;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

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

}
