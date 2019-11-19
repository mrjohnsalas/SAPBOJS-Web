import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeFrequenciesDetailComponent } from './time-frequencies-detail.component';

describe('TimeFrequenciesDetailComponent', () => {
  let component: TimeFrequenciesDetailComponent;
  let fixture: ComponentFixture<TimeFrequenciesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeFrequenciesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeFrequenciesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
