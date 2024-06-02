import { Evaluation } from './../../core/final-average-calculation/interfaces/evaluation';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'final-average-calculation',
  templateUrl: './final-average-calculation.component.html',
  styleUrl: './final-average-calculation.component.scss'
})
export class FinalAverageCalculationComponent implements OnInit {

  public formGroup!: FormGroup;
  public evaluations!: number[];
  public finalGrade: number = 0;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getFormGroup();
  }

  private getFormGroup() {
    this.formGroup = this.formBuilder.group({
      numberEvaluations: [undefined],
      grades: this.formBuilder.array([])
    });
  }

  get gradesArray(): FormArray {
    return this.formGroup.get('grades') as FormArray;
  }

  public calc(): number {
    if (this.formGroup.invalid) {
      return 0;
    }

    this.formGroup.get('grades')?.value.forEach((value: Evaluation) => {
      this.finalGrade += value.grade * (value.weightGrade / 100);
    });
    return this.finalGrade;
  }

  public add() {
    let value = this.formGroup.get('numberEvaluations')?.value;
    if (value) {
      for (let i = 0; i < value; i++) {
        this.gradesArray.push(this.createGrade());
      }
    }
  }

  private createGrade(): FormGroup {
    return this.formBuilder.group({
      description: [undefined],
      grade: [undefined, Validators.compose([Validators.required])],
      weightGrade: [undefined, Validators.compose([Validators.required])]
    });
  }

  public clear() {
    this.gradesArray.clear();
    this.formGroup.reset();
    this.finalGrade = 0;
  }
}
