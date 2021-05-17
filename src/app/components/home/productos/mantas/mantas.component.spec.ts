import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantasComponent } from './mantas.component';

describe('MantasComponent', () => {
  let component: MantasComponent;
  let fixture: ComponentFixture<MantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
