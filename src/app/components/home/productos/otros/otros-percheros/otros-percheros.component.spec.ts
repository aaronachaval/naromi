import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosPercherosComponent } from './otros-percheros.component';

describe('OtrosPercherosComponent', () => {
  let component: OtrosPercherosComponent;
  let fixture: ComponentFixture<OtrosPercherosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrosPercherosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosPercherosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
