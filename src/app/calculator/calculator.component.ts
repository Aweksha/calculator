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

  calculate() {
    try {
      this.input = eval(this.input).toString();
    } catch {
      this.input = 'Error';
    }
  }
}
