import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // imports FormsModule for ngModel

@Component({
  selector: 'app-calculator',
  standalone: true, // enables standalone component
  imports: [FormsModule], // allows usage of ngModel
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  input: string = '';

  append(value: string) {
    this.input += value;
  }

  clear() {
    this.input = '';
  }

  toggleSign() {
    if (this.input === '') {
      // If input is empty, insert -1 * 
      this.input = '-1*';
    } else {
      try {
        const value = eval(this.input); // evaluate current input
        this.input = (-value).toString(); // negate it
      } catch {
        this.input = 'Error';
      }
    }
  }

  backspace() {
    this.input = this.input.slice(0, -1);
  }

  calculate() {
    try {
      this.input = eval(this.input).toString();
    } catch {
      this.input = 'Error';
    }
  }
}
