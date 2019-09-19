import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsCalcComponent } from './savings-calc.component';

describe('SavingsCalcComponent', () => {
  let component: SavingsCalcComponent;
  let fixture: ComponentFixture<SavingsCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
