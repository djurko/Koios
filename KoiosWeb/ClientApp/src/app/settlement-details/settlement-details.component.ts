import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Settlement } from '../settlement';

@Component({
  selector: 'app-settlement-details',
  templateUrl: './settlement-details.component.html',
  styleUrls: ['./settlement-details.component.css']
})
export class SettlementDetailsComponent implements OnInit {

  settlement: Settlement = { settlementId: null, name: '', zipCode: '', countryId: null, country: null };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

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
        }
      );
  }

}
