import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureTypesComponent } from './failure-types.component';

describe('FailureTypesComponent', () => {
  let component: FailureTypesComponent;
  let fixture: ComponentFixture<FailureTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
