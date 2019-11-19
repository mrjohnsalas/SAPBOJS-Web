import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceTypesComponent } from './maintenance-types.component';

describe('MaintenanceTypesComponent', () => {
  let component: MaintenanceTypesComponent;
  let fixture: ComponentFixture<MaintenanceTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
