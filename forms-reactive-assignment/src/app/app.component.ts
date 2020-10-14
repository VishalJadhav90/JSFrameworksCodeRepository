import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  statuses = ['Stable', 'Critical', 'Finished'];
  form: FormGroup = new FormGroup({
    'projectData': new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.validProjectName]),
      'email': new FormControl(null, [Validators.required, Validators.email], this.emailValidator),
      'projectStatus': new FormControl(null, [Validators.required])
    })
  })

  emailValidator(control: FormControl): Promise<any> | Observable<any> {
    const prms = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === "test@test.com") {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      },1500);
    });
    return prms;
  }

  validProjectName(control: FormControl) {
    if(control.value === "test") {
      return {'projectNameIsInvalid': true};
    } else {
      return null;
    }
  }

  onSubmit() {
    console.log(this.form);
  }
}
