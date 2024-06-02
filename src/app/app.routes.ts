import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalAverageCalculationComponent } from './final-average-calculation/final-average-calculation.component';

export const routes: Routes = [
  {
    path: '',
    component: FinalAverageCalculationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule { }
