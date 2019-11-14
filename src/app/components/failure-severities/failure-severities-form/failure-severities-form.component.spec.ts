import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureSeveritiesFormComponent } from './failure-severities-form.component';

describe('FailureSeveritiesFormComponent', () => {
  let component: FailureSeveritiesFormComponent;
  let fixture: ComponentFixture<FailureSeveritiesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureSeveritiesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureSeveritiesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
