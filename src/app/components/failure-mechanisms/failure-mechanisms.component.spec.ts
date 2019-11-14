import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureMechanismsComponent } from './failure-mechanisms.component';

describe('FailureMechanismsComponent', () => {
  let component: FailureMechanismsComponent;
  let fixture: ComponentFixture<FailureMechanismsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureMechanismsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureMechanismsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
