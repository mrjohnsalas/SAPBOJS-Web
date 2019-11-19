import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeFrequenciesFormComponent } from './time-frequencies-form.component';

describe('TimeFrequenciesFormComponent', () => {
  let component: TimeFrequenciesFormComponent;
  let fixture: ComponentFixture<TimeFrequenciesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeFrequenciesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeFrequenciesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
