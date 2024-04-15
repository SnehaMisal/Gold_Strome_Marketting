// Core Modules
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Plugin Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Store Module
import { StoreModule } from '@ngrx/store';
import { StoreState } from './store/index';

// App Routing Module & Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CountUpModule } from 'ngx-countup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSummernoteModule } from 'ngx-summernote';
import { TokenInterceptorService } from './services/token-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot(StoreState),
    CountUpModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxSummernoteModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgxSummernoteModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService , multi: true },
  ],
  bootstrap: [AppComponent],
  exports: [

  

  ]
})



export class AppModule { }


