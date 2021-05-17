import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmohadonesComponent } from './almohadones.component';

describe('AlmohadonesComponent', () => {
  let component: AlmohadonesComponent;
  let fixture: ComponentFixture<AlmohadonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmohadonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmohadonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
