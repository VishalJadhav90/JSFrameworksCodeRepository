import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //select by html element
  //selector: '[app-servers]', //select by html attribute
  //selector: ".app-servers", //select by class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  newServerEnabled = false;
  serverStatus = "server is offline";
  serverName = "";

  constructor() {
    setTimeout(() => {
      this.newServerEnabled = true;
      this.showServerStatus();
    }, 2000);
  }

  ngOnInit(): void {
  }

  showServerStatus() {
    if (this.newServerEnabled) {
      this.serverStatus = "Server is online";
    } else {
      this.serverStatus = "Server is offline";
    }
  }

  setServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
