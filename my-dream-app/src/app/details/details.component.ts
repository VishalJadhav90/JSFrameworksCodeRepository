import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  showDetails = false;
  timestamps = [];
  constructor() { }

  ngOnInit(): void {
  }

  getBgColor(timestamp: any) {
    //timestamp = +timestamp;
    let index = this.timestamps.indexOf(timestamp);
    console.log(index);
    console.log(this.timestamps);
    let color = index>4? 'blue': 'white';
    console.log(event);
    return color;
  }


  getFrColor(timestamp: any) {
    //timestamp = +timestamp;
    let index = this.timestamps.indexOf(timestamp);
    console.log(index);
    console.log(this.timestamps);
    let color = index>4? 'white': 'black';
    console.log(event);
    return color;
  }

  onClick() {
    this.timestamps.push(new Date());
    this.showDetails = ! this.showDetails;
  }
}
