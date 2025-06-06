import { Component } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator.component'; // imports CalculatorComponent

@Component({
  selector: 'app-root',
  standalone: true, // enables standalone component
  imports: [CalculatorComponent], // allows usage of CalculatorComponent in template
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
}
