import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureTypesDetailComponent } from './failure-types-detail.component';

describe('FailureTypesDetailComponent', () => {
  let component: FailureTypesDetailComponent;
  let fixture: ComponentFixture<FailureTypesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureTypesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureTypesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
