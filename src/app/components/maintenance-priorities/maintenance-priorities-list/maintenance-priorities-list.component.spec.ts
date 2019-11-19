import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePrioritiesListComponent } from './maintenance-priorities-list.component';

describe('MaintenancePrioritiesListComponent', () => {
  let component: MaintenancePrioritiesListComponent;
  let fixture: ComponentFixture<MaintenancePrioritiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenancePrioritiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancePrioritiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
