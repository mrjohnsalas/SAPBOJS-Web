import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureImpactsComponent } from './failure-impacts.component';

describe('FailureImpactsComponent', () => {
  let component: FailureImpactsComponent;
  let fixture: ComponentFixture<FailureImpactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureImpactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureImpactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
