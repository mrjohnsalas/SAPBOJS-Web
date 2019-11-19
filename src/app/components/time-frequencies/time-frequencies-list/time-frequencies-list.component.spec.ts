import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeFrequenciesListComponent } from './time-frequencies-list.component';

describe('TimeFrequenciesListComponent', () => {
  let component: TimeFrequenciesListComponent;
  let fixture: ComponentFixture<TimeFrequenciesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeFrequenciesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeFrequenciesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
