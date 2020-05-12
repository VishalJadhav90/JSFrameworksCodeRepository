import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GameApp';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  handleOddEvent(counter: number) {
    this.oddNumbers.push(counter);
  }

  handleEvenEvent(counter: number) {
    this.evenNumbers.push(counter);
  }
}
