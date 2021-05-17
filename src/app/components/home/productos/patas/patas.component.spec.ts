import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatasComponent } from './patas.component';

describe('PatasComponent', () => {
  let component: PatasComponent;
  let fixture: ComponentFixture<PatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
