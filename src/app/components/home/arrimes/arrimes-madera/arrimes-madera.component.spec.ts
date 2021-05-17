import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrimesMaderaComponent } from './arrimes-madera.component';

describe('ArrimesMaderaComponent', () => {
  let component: ArrimesMaderaComponent;
  let fixture: ComponentFixture<ArrimesMaderaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrimesMaderaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrimesMaderaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
