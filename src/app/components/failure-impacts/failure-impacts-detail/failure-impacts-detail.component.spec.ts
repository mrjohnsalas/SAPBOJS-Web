import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureImpactsDetailComponent } from './failure-impacts-detail.component';

describe('FailureImpactsDetailComponent', () => {
  let component: FailureImpactsDetailComponent;
  let fixture: ComponentFixture<FailureImpactsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureImpactsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureImpactsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
