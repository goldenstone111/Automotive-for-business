import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessprofilePage } from './businessprofile.page';

describe('BusinessprofilePage', () => {
  let component: BusinessprofilePage;
  let fixture: ComponentFixture<BusinessprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessprofilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
