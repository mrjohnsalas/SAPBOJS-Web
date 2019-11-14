import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureMechanismsListComponent } from './failure-mechanisms-list.component';

describe('FailureMechanismsListComponent', () => {
  let component: FailureMechanismsListComponent;
  let fixture: ComponentFixture<FailureMechanismsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureMechanismsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureMechanismsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
