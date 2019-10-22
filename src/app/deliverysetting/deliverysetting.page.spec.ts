import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverysettingPage } from './deliverysetting.page';

describe('DeliverysettingPage', () => {
  let component: DeliverysettingPage;
  let fixture: ComponentFixture<DeliverysettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverysettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverysettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
