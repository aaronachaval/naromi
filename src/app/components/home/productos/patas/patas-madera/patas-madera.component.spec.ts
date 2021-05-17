import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatasMaderaComponent } from './patas-madera.component';

describe('PatasMaderaComponent', () => {
  let component: PatasMaderaComponent;
  let fixture: ComponentFixture<PatasMaderaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatasMaderaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatasMaderaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
