import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId: number = 1;
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe( (data: Data) => {
      this.server = data['server']
    });
    // this.route.params.subscribe((param: Params) => {
    //   this.serverId = +param.id;
    //   this.server = this.serversService.getServer(this.serverId);
    // })
  }

  onEdit() {
    console.log("activated route in server", this.route);
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
