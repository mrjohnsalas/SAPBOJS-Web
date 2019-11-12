import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureCausesDetailComponent } from './failure-causes-detail.component';

describe('FailureCausesDetailComponent', () => {
  let component: FailureCausesDetailComponent;
  let fixture: ComponentFixture<FailureCausesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureCausesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureCausesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
