import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureSeveritiesListComponent } from './failure-severities-list.component';

describe('FailureSeveritiesListComponent', () => {
  let component: FailureSeveritiesListComponent;
  let fixture: ComponentFixture<FailureSeveritiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureSeveritiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureSeveritiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
