import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionMachinesFormComponent } from './production-machines-form.component';

describe('ProductionMachinesFormComponent', () => {
  let component: ProductionMachinesFormComponent;
  let fixture: ComponentFixture<ProductionMachinesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionMachinesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionMachinesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
