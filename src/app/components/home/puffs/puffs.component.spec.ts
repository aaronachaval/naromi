import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuffsComponent } from './puffs.component';

describe('PuffsComponent', () => {
  let component: PuffsComponent;
  let fixture: ComponentFixture<PuffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuffsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
