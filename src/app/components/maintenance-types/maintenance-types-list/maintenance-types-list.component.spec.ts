import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceTypesListComponent } from './maintenance-types-list.component';

describe('MaintenanceTypesListComponent', () => {
  let component: MaintenanceTypesListComponent;
  let fixture: ComponentFixture<MaintenanceTypesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceTypesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
