import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

  @ViewChild('f', {static: true}) signupForm: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  // signupForm: FormGroup;

  // ngOnInit() {
  //   this.signupForm = new FormGroup({
  //     'username': new FormControl(null),
  //     'email': new FormControl(null),
  //     'gender': new FormControl(null)
  //   });
  // }
}
