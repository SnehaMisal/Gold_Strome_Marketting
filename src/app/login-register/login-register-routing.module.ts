import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';

// const routes: Routes = [
//   { path:'login', component: LoginComponent}
// ];

const routes: Routes = [
  // { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  // { path:'login1', component: IndexComponent },
  { path:'forgot-password', component: ForgotPasswordComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRegisterRoutingModule { }
