import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activatedUser: boolean = false;
  constructor(private userService: UserService) {
    this.userService.activatedEmitter.subscribe((status)=> {
      console.log("emitted event", event);
      this.activatedUser = status;
    })
  }
}
