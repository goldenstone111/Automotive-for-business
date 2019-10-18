import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankdetailsPage } from './bankdetails.page';

describe('BankdetailsPage', () => {
  let component: BankdetailsPage;
  let fixture: ComponentFixture<BankdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankdetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
