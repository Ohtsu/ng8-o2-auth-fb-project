import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// import { Ng8O2AuthFbService } from '../../../../projects/ng8-o2-auth-fb/src/lib/ng8-o2-auth-fb.service';
import { Ng8O2AuthFbService } from 'ng8-o2-auth-fb';


import { CustomErrorStateMatcher } from '../../shared/custom-error-state-matcher';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  submitted = false;
  signupForm: FormGroup;
  esMatcher = new CustomErrorStateMatcher();

  constructor(private fb: FormBuilder, private authService: Ng8O2AuthFbService) {
  }

  reloadUser() {
    this.authService.reloadCurrentUser();
  }

  ngOnInit() {
    this.createForm();
  }


  onSubmit(email, password) {
      this.submitted = true;

      if (this.signupForm.invalid) {
          console.log(this.signupForm);
          return;
      }
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value));
      this.signup(email, password);
  }


  public hasError = (controlName: string, errorName: string) => {
    return this.signupForm.controls[controlName].hasError(errorName);
  }

  createForm() {
    this.signupForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    }
    );
  }

  getEmailErrorMessage() {
    const emailControl = this.signupForm.controls['email'];
    return emailControl.hasError('required') ? 'You must enter a value' :
    emailControl.hasError('email') ? 'Not a valid email' :
            '';
  }


  getPasswordErrorMessage() {
    const passwordControl = this.signupForm.controls['password'];
    return passwordControl.hasError('required') ? 'You must enter a value' :
           passwordControl.hasError('minLength') ? 'Minimum length (6)' :
            '';
  }


  getConfirmPasswordErrorMessage() {
    const confirmPasswordControl = this.signupForm.controls['password'];
    return confirmPasswordControl.hasError('required') ? 'You must enter a value' :
            confirmPasswordControl.hasError('MustMuch') ?  'Miss Much' :
            '';
  }

  signup(email, password) {
    console.log(email, password);
    this.authService.signUp(email, password);
  }
}

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          return;
      }

      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  };
}