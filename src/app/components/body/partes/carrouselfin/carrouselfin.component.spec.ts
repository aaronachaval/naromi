import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselfinComponent } from './carrouselfin.component';

describe('CarrouselfinComponent', () => {
  let component: CarrouselfinComponent;
  let fixture: ComponentFixture<CarrouselfinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselfinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselfinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
