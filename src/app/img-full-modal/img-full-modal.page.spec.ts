import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgFullModalPage } from './img-full-modal.page';

describe('ImgFullModalPage', () => {
  let component: ImgFullModalPage;
  let fixture: ComponentFixture<ImgFullModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgFullModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgFullModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
