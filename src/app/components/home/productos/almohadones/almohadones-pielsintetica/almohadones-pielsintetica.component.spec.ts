import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmohadonesPielsinteticaComponent } from './almohadones-pielsintetica.component';

describe('AlmohadonesPielsinteticaComponent', () => {
  let component: AlmohadonesPielsinteticaComponent;
  let fixture: ComponentFixture<AlmohadonesPielsinteticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmohadonesPielsinteticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmohadonesPielsinteticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
