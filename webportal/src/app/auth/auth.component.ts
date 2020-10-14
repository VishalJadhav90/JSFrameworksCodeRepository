import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResposeData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styleUrls: []
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  authObs: Observable<AuthResposeData> = null;

  constructor(private authService: AuthService,
              private router: Router,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
    if (!authForm.valid) {
      return
    }
    console.log(authForm.value);
    const email = authForm.value.email;
    const password = authForm.value.password;
    this.isLoading = true;

    if (this.isLoginMode) {
      this.authObs = this.authService.login(email, password);
    } else {
      this.authObs = this.authService.signup(email, password);
    }

    this.authObs.subscribe(res => {
      console.log("response data", res);
      this.isLoading = false;
      this.router.navigate(['/recipes']);
    }, errorRes => {
      this.error = errorRes;
      this.isLoading = false;
    });

    authForm.reset();
  }

  closeAlert() {
    this.error = "";
  }

}
