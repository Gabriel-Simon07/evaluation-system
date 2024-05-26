import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'final-average-calculation',
  templateUrl: './final-average-calculation.component.html',
  styleUrl: './final-average-calculation.component.scss'
})
export class FinalAverageCalculationComponent implements OnInit {

  public formGroup!: FormGroup;
  public evaluations!: number[];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getFormGroup();
  }

  private getFormGroup() {
    this.formGroup = this.formBuilder.group({
      numberEvaluations: [undefined],
      grades: this.formBuilder.group({
        description: [undefined, Validators.compose([Validators.required])],
        grade: [undefined, Validators.compose([Validators.required])],
        weightGrade: [undefined, Validators.compose([Validators.required])]
      })
    });
  }

  public calc(): number {
    if (this.formGroup.invalid) {
      return 0;
    }

    const grades = this.formGroup.get('grades')?.value;
    return Number(grades.grade) * (Number(grades.weightGrade) / 100);
  }

  public add() {
    let value = this.formGroup.get('numberEvaluations')?.value;
    let evaluation = Number(value);
    this.evaluations = [];
    while (evaluation > 0) {
      this.evaluations.push(evaluation--);
    }
  }

  public clear() {
    this.evaluations = [];
    this.formGroup.reset();
  }
}
