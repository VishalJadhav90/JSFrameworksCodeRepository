import { Component } from '@angular/core';

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html"
})
export class ServerComponent {
  private serverId: number = 10;
  private serverStatus: string = '';

  constructor() {
    if (Math.random()>0.5) {
      this.serverStatus = 'Online';
    } else {
      this.serverStatus = 'Offline';
    }
  }

  getServerId() {
    return this.serverId;
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    if (this.serverStatus === "Online") {
      return 'green';
    } else {
      return 'red';
    }
  }
}
