import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosMacetasComponent } from './otros-macetas.component';

describe('OtrosMacetasComponent', () => {
  let component: OtrosMacetasComponent;
  let fixture: ComponentFixture<OtrosMacetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrosMacetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosMacetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
