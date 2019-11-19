import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeFrequenciesComponent } from './time-frequencies.component';

describe('TimeFrequenciesComponent', () => {
  let component: TimeFrequenciesComponent;
  let fixture: ComponentFixture<TimeFrequenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeFrequenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeFrequenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
