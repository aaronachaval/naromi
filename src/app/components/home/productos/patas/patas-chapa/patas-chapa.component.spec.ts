import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatasChapaComponent } from './patas-chapa.component';

describe('PatasChapaComponent', () => {
  let component: PatasChapaComponent;
  let fixture: ComponentFixture<PatasChapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatasChapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatasChapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
