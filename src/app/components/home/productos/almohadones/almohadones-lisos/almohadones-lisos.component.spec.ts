import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmohadonesLisosComponent } from './almohadones-lisos.component';

describe('AlmohadonesLisosComponent', () => {
  let component: AlmohadonesLisosComponent;
  let fixture: ComponentFixture<AlmohadonesLisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmohadonesLisosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmohadonesLisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
