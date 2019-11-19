import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceTypesFormComponent } from './maintenance-types-form.component';

describe('MaintenanceTypesFormComponent', () => {
  let component: MaintenanceTypesFormComponent;
  let fixture: ComponentFixture<MaintenanceTypesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceTypesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceTypesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
