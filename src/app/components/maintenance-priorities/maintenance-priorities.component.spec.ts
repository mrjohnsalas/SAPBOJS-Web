import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePrioritiesComponent } from './maintenance-priorities.component';

describe('MaintenancePrioritiesComponent', () => {
  let component: MaintenancePrioritiesComponent;
  let fixture: ComponentFixture<MaintenancePrioritiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenancePrioritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancePrioritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
