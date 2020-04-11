import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  //styleUrls: ['./success-alert.component.css'],
  styles: [`
  p {
    font: caption;
    color: green
  }`]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
