import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrimesHierroComponent } from './arrimes-hierro.component';

describe('ArrimesHierroComponent', () => {
  let component: ArrimesHierroComponent;
  let fixture: ComponentFixture<ArrimesHierroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrimesHierroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrimesHierroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
