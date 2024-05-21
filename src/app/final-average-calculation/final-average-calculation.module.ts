import { NgModule } from "@angular/core";
import { FinalAverageCalculationComponent } from "./final-average-calculation.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { provideAnimations } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [FinalAverageCalculationComponent],
  exports: [FinalAverageCalculationComponent],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [ provideAnimations() ]
})
export class FinalAverageCalculationModule {

}
