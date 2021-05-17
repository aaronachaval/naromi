import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselcelComponent } from './carrouselcel.component';

describe('CarrouselcelComponent', () => {
  let component: CarrouselcelComponent;
  let fixture: ComponentFixture<CarrouselcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
