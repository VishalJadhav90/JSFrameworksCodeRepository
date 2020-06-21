import { Component, ViewChild, NgModule } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: true}) projectForm: NgForm;

  statuses = ['Stable', 'Critical', 'Finished'];

  onSubmit() {
    console.log("projectForm:", this.projectForm);
    this.projectForm.reset();
  }

}
