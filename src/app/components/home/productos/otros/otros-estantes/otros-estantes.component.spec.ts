import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosEstantesComponent } from './otros-estantes.component';

describe('OtrosEstantesComponent', () => {
  let component: OtrosEstantesComponent;
  let fixture: ComponentFixture<OtrosEstantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrosEstantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosEstantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
