import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostSplitterComponent } from './cost-splitter.component';

describe('CostSplitterComponent', () => {
  let component: CostSplitterComponent;
  let fixture: ComponentFixture<CostSplitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostSplitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostSplitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
