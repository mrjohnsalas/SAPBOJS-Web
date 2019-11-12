import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjListComponent } from './obj-list.component';

describe('ObjListComponent', () => {
  let component: ObjListComponent;
  let fixture: ComponentFixture<ObjListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
