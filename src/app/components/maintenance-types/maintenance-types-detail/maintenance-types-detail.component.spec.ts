import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceTypesDetailComponent } from './maintenance-types-detail.component';

describe('MaintenanceTypesDetailComponent', () => {
  let component: MaintenanceTypesDetailComponent;
  let fixture: ComponentFixture<MaintenanceTypesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceTypesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceTypesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
