import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionButtonBarComponent } from './option-button-bar.component';

describe('OptionButtonBarComponent', () => {
  let component: OptionButtonBarComponent;
  let fixture: ComponentFixture<OptionButtonBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionButtonBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionButtonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
