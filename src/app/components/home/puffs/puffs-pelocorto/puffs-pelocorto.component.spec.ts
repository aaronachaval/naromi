import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuffsPelocortoComponent } from './puffs-pelocorto.component';

describe('PuffsPelocortoComponent', () => {
  let component: PuffsPelocortoComponent;
  let fixture: ComponentFixture<PuffsPelocortoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuffsPelocortoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuffsPelocortoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
