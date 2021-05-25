import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmMigComponent } from './om-mig.component';

describe('OmMigComponent', () => {
  let component: OmMigComponent;
  let fixture: ComponentFixture<OmMigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmMigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmMigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
