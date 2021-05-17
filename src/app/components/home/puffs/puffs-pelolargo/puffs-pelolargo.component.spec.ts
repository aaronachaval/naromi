import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuffsPelolargoComponent } from './puffs-pelolargo.component';

describe('PuffsPelolargoComponent', () => {
  let component: PuffsPelolargoComponent;
  let fixture: ComponentFixture<PuffsPelolargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuffsPelolargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuffsPelolargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
