import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterRoutingModule } from './login-register-routing.module';
// import { IndexComponent } from './index/index.component';
import { HopeUiModule } from '../components/hope-ui/hope-ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

console.warn("login module")
@NgModule({
  declarations: [
    // IndexComponent,
    ForgotPasswordComponent,
    LoginComponent,
    // ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    LoginRegisterRoutingModule,
    HopeUiModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ],
  exports:[
    // IndexComponent
  ]
})
export class LoginRegisterModule { }
