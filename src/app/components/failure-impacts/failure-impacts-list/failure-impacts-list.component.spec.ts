import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureImpactsListComponent } from './failure-impacts-list.component';

describe('FailureImpactsListComponent', () => {
  let component: FailureImpactsListComponent;
  let fixture: ComponentFixture<FailureImpactsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureImpactsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureImpactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
