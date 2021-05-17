import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosEspejosComponent } from './otros-espejos.component';

describe('OtrosEspejosComponent', () => {
  let component: OtrosEspejosComponent;
  let fixture: ComponentFixture<OtrosEspejosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrosEspejosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosEspejosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
