import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Foto1Component } from './foto1.component';

describe('Foto1Component', () => {
  let component: Foto1Component;
  let fixture: ComponentFixture<Foto1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Foto1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Foto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
