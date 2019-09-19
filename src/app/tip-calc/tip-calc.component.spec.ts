import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipCalcComponent } from './tip-calc.component';

describe('TipCalculatorComponent', () => {
  let component: TipCalcComponent;
  let fixture: ComponentFixture<TipCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
