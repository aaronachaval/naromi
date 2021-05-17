import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmohadonesBordadosComponent } from './almohadones-bordados.component';

describe('AlmohadonesBordadosComponent', () => {
  let component: AlmohadonesBordadosComponent;
  let fixture: ComponentFixture<AlmohadonesBordadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmohadonesBordadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmohadonesBordadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
