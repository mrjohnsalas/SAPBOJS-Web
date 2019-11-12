import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureCausesComponent } from './failure-causes.component';

describe('FailureCausesComponent', () => {
  let component: FailureCausesComponent;
  let fixture: ComponentFixture<FailureCausesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureCausesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureCausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
