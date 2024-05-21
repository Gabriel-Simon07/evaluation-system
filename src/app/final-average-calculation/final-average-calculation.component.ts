import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Evaluation } from '../../core/final-average-calculation/interfaces/evaluation';

@Component({
  selector: 'final-average-calculation',
  templateUrl: './final-average-calculation.component.html',
  styleUrl: './final-average-calculation.component.scss'
})
export class FinalAverageCalculationComponent implements OnInit {

  public formGroup!: FormGroup;
  public evaluations!: number[];
  public number = 0;
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
    const grades = this.formGroup.get('grades')?.value;
    let finalGrade = 0.0;

    grades.forEach((avaliacao: Evaluation) => {
      finalGrade += avaliacao.grade * avaliacao.weightGrade;
    });

    return finalGrade;
  }

  public add() {
    let value = this.formGroup.get('numberEvaluations')?.value + 1;
    let evaluation: number = Number(value);
    this.evaluations = [];
    while (evaluation > 0) {
      this.evaluations.push(evaluation--);
    }
  }
}
