import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankaccountsPage } from './bankaccounts.page';

describe('BankaccountsPage', () => {
  let component: BankaccountsPage;
  let fixture: ComponentFixture<BankaccountsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankaccountsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankaccountsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
