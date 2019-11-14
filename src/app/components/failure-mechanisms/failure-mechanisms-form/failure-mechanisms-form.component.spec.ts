import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureMechanismsFormComponent } from './failure-mechanisms-form.component';

describe('FailureMechanismsFormComponent', () => {
  let component: FailureMechanismsFormComponent;
  let fixture: ComponentFixture<FailureMechanismsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureMechanismsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureMechanismsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
