import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureMechanismsDetailComponent } from './failure-mechanisms-detail.component';

describe('FailureMechanismsDetailComponent', () => {
  let component: FailureMechanismsDetailComponent;
  let fixture: ComponentFixture<FailureMechanismsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureMechanismsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureMechanismsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
