import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjDetailComponent } from './obj-detail.component';

describe('ObjDetailComponent', () => {
  let component: ObjDetailComponent;
  let fixture: ComponentFixture<ObjDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
