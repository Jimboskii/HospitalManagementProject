import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDrugComponent } from './insert-drug.component';

describe('InsertDrugComponent', () => {
  let component: InsertDrugComponent;
  let fixture: ComponentFixture<InsertDrugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertDrugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
