import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrimesChapaComponent } from './arrimes-chapa.component';

describe('ArrimesChapaComponent', () => {
  let component: ArrimesChapaComponent;
  let fixture: ComponentFixture<ArrimesChapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrimesChapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrimesChapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
