import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// import { Ng8O2AuthFbService } from '../../../../projects/ng8-o2-auth-fb/src/lib/ng8-o2-auth-fb.service';
import { Ng8O2AuthFbService } from 'ng8-o2-auth-fb';

import { CustomErrorStateMatcher } from '../../shared/custom-error-state-matcher';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  submitted = false;
  signinForm: FormGroup;
  esMatcher = new CustomErrorStateMatcher();

  constructor(private fb: FormBuilder, private authService: Ng8O2AuthFbService) {
  }


  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signinForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  onSubmit(email, password) {
    this.submitted = true;

    if (this.signinForm.invalid) {
        console.log(this.signinForm);
        return;
    }
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signinForm.value));
    this.signin(email, password);
  }

  signin(email, password) {
    console.log(email, password);
    this.authService.loginEmail(email, password);
  }

  loginWithGoogle() {
    this.authService.loginGoogle();
  }

  loginWithTwitter() {
    this.authService.loginTwitter();
  }

  loginWithGithub() {
    this.authService.loginGithub();
  }

  loginWithFacebook() {
    this.authService.loginFacebook();
  }

  getEmailErrorMessage() {
    const emailControl = this.signinForm.controls['email'];
    return emailControl.hasError('required') ? 'You must enter a value' :
    emailControl.hasError('email') ? 'Not a valid email' :
            '';
  }

}
