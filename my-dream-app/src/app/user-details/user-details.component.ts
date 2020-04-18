import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userName = "";
  enableClearBtn = false;
  constructor() { }

  ngOnInit(): void {
  }

  onTextChange(event: Event) {
    console.log(event);
    if (this.userName === "") {
      this.enableClearBtn = false;
    } else {
      this.enableClearBtn = true;
    }
  }

  onButtonClick() {
    this.userName = "";
  }
}
