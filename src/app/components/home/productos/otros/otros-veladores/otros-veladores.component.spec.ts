import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosVeladoresComponent } from './otros-veladores.component';

describe('OtrosVeladoresComponent', () => {
  let component: OtrosVeladoresComponent;
  let fixture: ComponentFixture<OtrosVeladoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrosVeladoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosVeladoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
