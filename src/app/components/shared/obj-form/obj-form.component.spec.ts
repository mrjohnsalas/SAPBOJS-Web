import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjFormComponent } from './obj-form.component';

describe('ObjFormComponent', () => {
  let component: ObjFormComponent;
  let fixture: ComponentFixture<ObjFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
