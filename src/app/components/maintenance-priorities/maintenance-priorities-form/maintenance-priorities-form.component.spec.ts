import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePrioritiesFormComponent } from './maintenance-priorities-form.component';

describe('MaintenancePrioritiesFormComponent', () => {
  let component: MaintenancePrioritiesFormComponent;
  let fixture: ComponentFixture<MaintenancePrioritiesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenancePrioritiesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancePrioritiesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
