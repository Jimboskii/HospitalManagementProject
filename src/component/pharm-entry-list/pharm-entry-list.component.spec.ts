import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmEntryListComponent } from './pharm-entry-list.component';

describe('PharmEntryListComponent', () => {
  let component: PharmEntryListComponent;
  let fixture: ComponentFixture<PharmEntryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmEntryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmEntryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
