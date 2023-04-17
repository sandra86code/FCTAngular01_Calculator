import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';

  number1: number = 0;
  number2: number = 0;
  result: number = 0;
  error: string = '';

  addition(): void {
    this.result = this.number1 + this.number2;
    this.number1 = 0;
    this.number2 = 0;
  }

  substraction(): void {
    this.result = this.number1 - this.number2;
    this.error = '';
    this.number1 = 0;
    this.number2 = 0;
  }
  
  division(): void {
    
    if(this.number2!=0) {
      this.result = this.number1 / this.number2;
      this.error = '';
    }else {
      this.result = 0;
      this.error = "No se puede dividir entre 0"
    }
    this.number1 = 0;
    this.number2 = 0;
  }

  multiplication(): void {
    this.result = this.number1 * this.number2;
    this.number1 = 0;
    this.number2 = 0;
    this.error = '';
  }
}
