import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementEditComponent } from './settlement-edit.component';

describe('SettlementEditComponent', () => {
  let component: SettlementEditComponent;
  let fixture: ComponentFixture<SettlementEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettlementEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
