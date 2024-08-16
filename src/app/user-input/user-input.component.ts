import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.module';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();
  enterInitialInvestment: string = '0';
  enterAnnualInvestment: string = '0';
  enterExpectedReturn: string = '5';
  enterDuration: string = '10';
  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enterInitialInvestment,
      annualInvestment: +this.enterAnnualInvestment,
      expectedReturn: +this.enterExpectedReturn,
      duration: +this.enterDuration,
    });
  }
}
