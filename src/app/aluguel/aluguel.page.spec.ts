import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AluguelPage } from './aluguel.page';

describe('AluguelPage', () => {
  let component: AluguelPage;
  let fixture: ComponentFixture<AluguelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AluguelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AluguelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
