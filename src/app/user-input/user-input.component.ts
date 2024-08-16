import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enterInitialInvestment = signal('0');
  enterAnnualInvestment = signal('0');
  enterExpectedReturn = signal('5');
  enterDuration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enterInitialInvestment(),
      annualInvestment: +this.enterAnnualInvestment(),
      expectedReturn: +this.enterExpectedReturn(),
      duration: +this.enterDuration(),
    });
    this.enterAnnualInvestment.set('0');
    this.enterInitialInvestment.set('0');
    this.enterExpectedReturn.set('5');
    this.enterDuration.set('10');
  }
}
