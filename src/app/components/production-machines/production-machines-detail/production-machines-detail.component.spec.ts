import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionMachinesDetailComponent } from './production-machines-detail.component';

describe('ProductionMachinesDetailComponent', () => {
  let component: ProductionMachinesDetailComponent;
  let fixture: ComponentFixture<ProductionMachinesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionMachinesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionMachinesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
