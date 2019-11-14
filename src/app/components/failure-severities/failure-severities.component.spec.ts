import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureSeveritiesComponent } from './failure-severities.component';

describe('FailureSeveritiesComponent', () => {
  let component: FailureSeveritiesComponent;
  let fixture: ComponentFixture<FailureSeveritiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureSeveritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureSeveritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
