import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionMachinesComponent } from './production-machines.component';

describe('ProductionMachinesComponent', () => {
  let component: ProductionMachinesComponent;
  let fixture: ComponentFixture<ProductionMachinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionMachinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
