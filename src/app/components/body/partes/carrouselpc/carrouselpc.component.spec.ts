import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselpcComponent } from './carrouselpc.component';

describe('CarrouselpcComponent', () => {
  let component: CarrouselpcComponent;
  let fixture: ComponentFixture<CarrouselpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselpcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
