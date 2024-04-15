import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPwdForm: any;
  submitted: boolean = false;

  constructor( private formBuilder: FormBuilder, private route:Router) { }

 
  get fun() {
    return this.forgotPwdForm.controls;
  }
  onReset(){
    this.submitted = true;
    if (this.forgotPwdForm.invalid) {
      return;
    }

    //True if all the fields are filled
    if (this.submitted) {
      this.route.navigate(['/login']);
    }

    console.log('login', this.forgotPwdForm.value);
    this.submitted = true;
  }
  ngOnInit() {
    //Add User form validations
    this.forgotPwdForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
          // Validators.pattern(
          //   '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$'
          // ),
        ],
      ]
    });
  }
}
