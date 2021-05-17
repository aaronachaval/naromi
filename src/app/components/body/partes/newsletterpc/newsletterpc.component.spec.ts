import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterpcComponent } from './newsletterpc.component';

describe('NewsletterpcComponent', () => {
  let component: NewsletterpcComponent;
  let fixture: ComponentFixture<NewsletterpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterpcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
