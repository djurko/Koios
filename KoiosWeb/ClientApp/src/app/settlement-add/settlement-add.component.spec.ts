import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementAddComponent } from './settlement-add.component';

describe('SettlementAddComponent', () => {
  let component: SettlementAddComponent;
  let fixture: ComponentFixture<SettlementAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettlementAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
