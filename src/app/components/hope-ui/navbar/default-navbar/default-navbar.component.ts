import { Component, Inject, OnInit, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Router,ActivationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import {SettingState} from '../../../../model/setting.model';
import {theme_font_size, sidebar_type} from '../../../../store/setting/actions';
import {themeFontSizeSelector, sidebarTypeSelector} from '../../../../store/setting/selector';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'hui-default-navbar',
  templateUrl: './default-navbar.component.html',
  styles: [
    `
      .dropdown-toggle::after {
        display: none;
      }
    `
  ]
})
export class DefaultNavbarComponent implements OnInit {
  loginName:any;
  loginType:any;
  userLoginType:any
  @Input() visible: boolean = false;
  [x: string]: any;

 
  themeFontSizeSelector$: Observable<string>;

  sidebarTypeSelector$: Observable<any>;

  sidebarValue = []
  profileImageUrl: string = '';
  constructor(private commonService: CommonService, private http: HttpClient,private router: Router, private store: Store<{ settingObject: SettingState}>) {
    this.themeFontSizeSelector$ = store.pipe(select(themeFontSizeSelector));
    this.sidebarTypeSelector$ = store.pipe(select(sidebarTypeSelector));
    this.sidebarTypeSelector$.subscribe((value) => this.sidebarValue = value)
    this.router.events.subscribe((val) => {
      if(val instanceof ActivationEnd) {
        const currentObj = val.snapshot.data
        if(currentObj['pageTitle'] !== undefined) {
          this['pageName'] = currentObj['pageTitle']
        }
      }
    });
  }

  ngOnInit(): void {
    this.getLoginDetail()
    this.commonService.profileImageUrl$.subscribe(url => {
      this.profileImageUrl = url;
      console.log("this.profileImageUrl",url);
    });
    // console.log("this.profilePic$",this.profilePic$);
    
  }
  getLoginDetail(){
    this.loginType = localStorage.getItem('loginType');
    if(this.loginType == "Admin"){
      this.http
      .get(environment.apiUrl + 'getAdminProfile')
      .subscribe((res: any) => {
        this.loginName= res.obj.name 
        this.profileImageUrl =  res.obj.profileImage
        console.log("res",res);
      });
      this.userLoginType = localStorage.getItem('loginType');
    }else if(this.loginType == "CEO"){
      this.http
      .get(environment.apiUrl + 'getCEOAdminProfile')
      .subscribe((res: any) => {
        this.loginName= res.obj.name 
        this.profileImageUrl =  res.obj.profileImage
        console.log("res.obj.profileImage",res.obj.profileImage);
      });
      this.userLoginType = localStorage.getItem('loginType');
    }else if(this.loginType == "GM"){
      this.http
      .get(environment.apiUrl + 'getGMAdminProfile')
      .subscribe((res: any) => {
        this.loginName= res.obj.nameGM 
        this.profileImageUrl =  res.obj.profileImage
        console.log("res.obj.profileImage",res.obj.profileImage);
      });
      this.userLoginType = localStorage.getItem('loginType');
    }
    else if(this.loginType == "SM"){
      this.http
      .get(environment.apiUrl + 'getSMAdminProfile')
      .subscribe((res: any) => {
        this.loginName= res.obj.nameSM 
        this.profileImageUrl =  res.obj.profileImage
        console.log("res.obj.profileImage",res.obj.profileImage);
      });
      this.userLoginType = localStorage.getItem('loginType');

    }else if(this.loginType == "DSM"){
      this.http
      .get(environment.apiUrl + 'getDSMAdminProfile')
      .subscribe((res: any) => {
        this.loginName= res.obj.nameDSM 
        this.profileImageUrl =  res.obj.profileImage
        console.log("res.obj.profileImage",res.obj.profileImage);
      });
      this.userLoginType = localStorage.getItem('loginType');
    }
    else if(this.loginType == "SA"){
      this.http
      .get(environment.apiUrl + 'get_SAAdminProfile')
      .subscribe((res: any) => {
        this.loginName= res.obj.nameSA 
        this.profileImageUrl =  res.obj.profileImage
        console.log("res.obj.profileImage",res.obj.profileImage);
      });
      this.userLoginType = localStorage.getItem('loginType');
    }

  
  }
  changeThemeFontSize(value: string) {
    this.store.dispatch(theme_font_size({value: value}))
  }

  toggleSidebar(value: any) {
    const sidebar = value
    if (sidebar.includes('sidebar-mini')) {
      this.store.dispatch(sidebar_type({ value: sidebar.filter((x: string) => x != 'sidebar-mini') }))
    } else {
      this.store.dispatch(sidebar_type({ value: [...sidebar, 'sidebar-mini'] }))
    }
  }
}
