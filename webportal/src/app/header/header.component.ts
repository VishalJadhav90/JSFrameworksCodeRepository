import { Component, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  isAuthenticated = false;

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {
      authService.user.subscribe(res=>{
        if (res) {
          this.isAuthenticated = true;
        } else {
          this.isAuthenticated = false;
        }
      })
  }

  ngOnInit() {

  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
