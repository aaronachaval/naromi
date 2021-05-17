import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmohadonesFamiliasComponent } from './almohadones-familias.component';

describe('AlmohadonesFamiliasComponent', () => {
  let component: AlmohadonesFamiliasComponent;
  let fixture: ComponentFixture<AlmohadonesFamiliasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmohadonesFamiliasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmohadonesFamiliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
