import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  updatedServer = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("activated Route in edit-server", this.route);

    this.route.params.subscribe((param: Params) => {
      console.log("in edit params", param);
      this.server = this.serversService.getServer(+param['id']);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });

    this.route.queryParams.subscribe((queryParam: Params) => {
      console.log("in edit queryParams", queryParam);
      this.allowEdit = queryParam['allowEdit'] === '1' ? true : false
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.updatedServer = true;
  }

  canDeactivate() {
    if (this.updatedServer) {
      return true;
    }
    if ((this.server.name !== this.serverName || this.server.status !== this.serverStatus) && !this.updatedServer) {
      return confirm("Discard changes ?");
    }
  }
}
