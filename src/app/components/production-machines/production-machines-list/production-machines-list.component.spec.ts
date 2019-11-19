import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionMachinesListComponent } from './production-machines-list.component';

describe('ProductionMachinesListComponent', () => {
  let component: ProductionMachinesListComponent;
  let fixture: ComponentFixture<ProductionMachinesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionMachinesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionMachinesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
