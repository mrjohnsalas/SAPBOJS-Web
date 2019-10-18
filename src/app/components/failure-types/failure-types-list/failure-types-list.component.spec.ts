import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureTypesListComponent } from './failure-types-list.component';

describe('FailureTypesListComponent', () => {
  let component: FailureTypesListComponent;
  let fixture: ComponentFixture<FailureTypesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureTypesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
