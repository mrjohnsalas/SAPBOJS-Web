import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureCausesListComponent } from './failure-causes-list.component';

describe('FailureCausesListComponent', () => {
  let component: FailureCausesListComponent;
  let fixture: ComponentFixture<FailureCausesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureCausesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureCausesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
