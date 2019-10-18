import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddphotosPage } from './addphotos.page';

describe('AddphotosPage', () => {
  let component: AddphotosPage;
  let fixture: ComponentFixture<AddphotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddphotosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddphotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
