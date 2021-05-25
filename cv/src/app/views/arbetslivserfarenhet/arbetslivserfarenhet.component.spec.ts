import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbetslivserfarenhetComponent } from './arbetslivserfarenhet.component';

describe('ArbetslivserfarenhetComponent', () => {
  let component: ArbetslivserfarenhetComponent;
  let fixture: ComponentFixture<ArbetslivserfarenhetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbetslivserfarenhetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbetslivserfarenhetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
