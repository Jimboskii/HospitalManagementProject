import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertNurseEntryComponent } from './insert-nurse-entry.component';

describe('InsertNurseEntryComponent', () => {
  let component: InsertNurseEntryComponent;
  let fixture: ComponentFixture<InsertNurseEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertNurseEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertNurseEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
