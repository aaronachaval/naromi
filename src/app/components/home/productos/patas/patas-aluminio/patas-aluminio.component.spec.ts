import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatasAluminioComponent } from './patas-aluminio.component';

describe('PatasAluminioComponent', () => {
  let component: PatasAluminioComponent;
  let fixture: ComponentFixture<PatasAluminioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatasAluminioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatasAluminioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
