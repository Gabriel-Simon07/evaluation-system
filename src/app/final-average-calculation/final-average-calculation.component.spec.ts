import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalAverageCalculationComponent } from './final-average-calculation.component';

describe('FinalAverageCalculationComponent', () => {
  let component: FinalAverageCalculationComponent;
  let fixture: ComponentFixture<FinalAverageCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalAverageCalculationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinalAverageCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
