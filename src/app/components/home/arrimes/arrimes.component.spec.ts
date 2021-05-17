import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrimesComponent } from './arrimes.component';

describe('ArrimesComponent', () => {
  let component: ArrimesComponent;
  let fixture: ComponentFixture<ArrimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
