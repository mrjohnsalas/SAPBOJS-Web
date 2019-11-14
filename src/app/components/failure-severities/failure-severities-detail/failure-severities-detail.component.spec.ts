import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureSeveritiesDetailComponent } from './failure-severities-detail.component';

describe('FailureSeveritiesDetailComponent', () => {
  let component: FailureSeveritiesDetailComponent;
  let fixture: ComponentFixture<FailureSeveritiesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureSeveritiesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureSeveritiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
