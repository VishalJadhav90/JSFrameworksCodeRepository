import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  evenEventTimer;
  oddEventTimer;
  oddNumber: number = 1;
  evenNumber: number = 2;
  @Output('oddEvent') oddEvent = new EventEmitter<number>();
  @Output('evenEvent') evenEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.evenEventTimer = setInterval(()=> {
      this.oddEvent.emit(this.oddNumber)
      this.oddNumber += 2
    }, 3000)
    this.oddEventTimer = setInterval(()=> {
      this.evenEvent.emit(this.evenNumber)
      this.evenNumber += 2
    }, 3000)

  }

  stopGame() {
    clearInterval(this.evenEventTimer);
    clearInterval(this.oddEventTimer);
  }
}
