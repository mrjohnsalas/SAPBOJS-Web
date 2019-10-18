import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureTypesFormComponent } from './failure-types-form.component';

describe('FailureTypesFormComponent', () => {
  let component: FailureTypesFormComponent;
  let fixture: ComponentFixture<FailureTypesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureTypesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureTypesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
