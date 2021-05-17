import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmohadonesEstampadosComponent } from './almohadones-estampados.component';

describe('AlmohadonesEstampadosComponent', () => {
  let component: AlmohadonesEstampadosComponent;
  let fixture: ComponentFixture<AlmohadonesEstampadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmohadonesEstampadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmohadonesEstampadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
