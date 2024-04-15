import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  submitted: boolean = false;
  // returnUrl: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private commonService:CommonService
    // private userservice: AccountserviceService
  ) {
  }
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    //True if all the fields are filled
    if (this.submitted) {
      var formData: any = new FormData();
      formData.append("email", this.loginForm.value.email);
      formData.append("password", this.loginForm.value.password);
      formData.append("loginType", this.loginForm.value.loginType);
      for (const pair of formData.entries()) {
            console.log(`${pair[0]}, ${pair[1]}`);
          }
      this.commonService.login(formData);
      //this.router.navigate(['/dashboard']);
    }

    // console.log('login', this.loginForm.value);
    // this.submitted = true;

  }
  ngOnInit() {
    //Add User form validations
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
          // Validators.pattern(
          //   '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$'
          // ),
        ],
      ],
      password: [
        '',
        [
          Validators.required
          // Validators.pattern(
          //   '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
          // ),
        ],
      ],
      loginType:['',[Validators.required]]
    });
  }


}
