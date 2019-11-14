import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureImpactsFormComponent } from './failure-impacts-form.component';

describe('FailureImpactsFormComponent', () => {
  let component: FailureImpactsFormComponent;
  let fixture: ComponentFixture<FailureImpactsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureImpactsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureImpactsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
