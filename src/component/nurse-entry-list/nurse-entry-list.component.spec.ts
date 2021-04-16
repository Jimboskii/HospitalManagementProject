import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseEntryListComponent } from './nurse-entry-list.component';

describe('NurseEntryListComponent', () => {
  let component: NurseEntryListComponent;
  let fixture: ComponentFixture<NurseEntryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseEntryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseEntryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
