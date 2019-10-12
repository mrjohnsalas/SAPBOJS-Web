import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailuretypeComponent } from './failuretype.component';

describe('FailuretypeComponent', () => {
  let component: FailuretypeComponent;
  let fixture: ComponentFixture<FailuretypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailuretypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailuretypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
