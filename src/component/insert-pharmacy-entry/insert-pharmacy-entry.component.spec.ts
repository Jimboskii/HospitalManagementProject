import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPharmacyEntryComponent } from './insert-pharmacy-entry.component';

describe('InsertPharmacyEntryComponent', () => {
  let component: InsertPharmacyEntryComponent;
  let fixture: ComponentFixture<InsertPharmacyEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertPharmacyEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertPharmacyEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
