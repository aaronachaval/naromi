import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouseliniComponent } from './carrouselini.component';

describe('CarrouseliniComponent', () => {
  let component: CarrouseliniComponent;
  let fixture: ComponentFixture<CarrouseliniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouseliniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouseliniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
