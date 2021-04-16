import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPatientComponent } from './insert-patient.component';

describe('InsertPatientComponent', () => {
  let component: InsertPatientComponent;
  let fixture: ComponentFixture<InsertPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
