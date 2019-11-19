import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePrioritiesDetailComponent } from './maintenance-priorities-detail.component';

describe('MaintenancePrioritiesDetailComponent', () => {
  let component: MaintenancePrioritiesDetailComponent;
  let fixture: ComponentFixture<MaintenancePrioritiesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenancePrioritiesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancePrioritiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
