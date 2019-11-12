import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureCausesFormComponent } from './failure-causes-form.component';

describe('FailureCausesFormComponent', () => {
  let component: FailureCausesFormComponent;
  let fixture: ComponentFixture<FailureCausesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureCausesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureCausesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
