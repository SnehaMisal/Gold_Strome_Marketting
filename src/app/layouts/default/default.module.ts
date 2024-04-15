import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultRoutingModule } from './default-routing.module';
import { IndexComponent } from './index/index.component';
import { HopeUiModule } from '../../components/hope-ui/hope-ui.module'
import { LoginRegisterModule } from 'src/app/login-register/login-register.module';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    HopeUiModule,
    DefaultRoutingModule,
    LoginRegisterModule
  ],
  exports: [
    IndexComponent
  ]
})
export class DefaultModule { }
