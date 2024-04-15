import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private isAuthenticated = false;
  userLoginType!: string;
  response: any;
  currentToken: any;
  //private userLoginType = 0; // Default value (0 for unknown)
  constructor(private router: Router,private http: HttpClient,private toastr: ToastrService) { }
  login(data:any){
    console.log("data",data.get('loginType'));
    
    

    this.http.post(environment.apiUrl + 'allAdminLogins',data)
    .subscribe((response)=>{
      this.response = response;
      console.log("response",this.response)

      if(this.response.error_code == "200"){
        console.log("login")
        this.isAuthenticated = true;
        this.toastr.success(this.response.message);
        //this.isLogIn.next(true);
        localStorage.setItem(environment.token, this.response.Token);
        localStorage.setItem(environment.LoginType, this.response.loginType);
        localStorage.setItem(environment.login_id, this.response.id);
        this.userLoginType = this.response.loginType;
        //this.userLoginType = data.get('loginType');
        if( this.userLoginType == 'Admin'){
          this.router.navigate(['admin/dashboard']); 
        }
        if( this.userLoginType == 'CEO'){
          this.router.navigate(['ceo/dashboard']);
        }
        if( this.userLoginType == 'GM'){
          this.router.navigate(['gm/dashboard']);
        }
        if( this.userLoginType == 'SM'){
          this.router.navigate(['sm/dashboard']);
        }
        if( this.userLoginType == 'DSM'){
          this.router.navigate(['dsm/dashboard']);
        }
        if( this.userLoginType == 'SA'){
          this.router.navigate(['sa/dashboard']);
        }
        //this.router.navigate(['dashboard'])
      }else if(this.response.error_code == "401"){
        // console.warn(this.response.message)
        this.toastr.error(this.response.message);
        //this.isLoginError.emit(true)
      }
    })



    // this.userLoginType = data.get('loginType');
    // localStorage.setItem(environment.LoginType, this.userLoginType);
    // // localStorage.setItem("environment.LoginType", "this.userLoginType");
    // if( data.get('loginType') == '1'){
    //   this.router.navigate(['admin']); 
    // }
    // if( data.get('loginType') == '2'){
    //   this.router.navigate(['ceo/dashboard']);
    // }
    // if( data.get('loginType') == '3'){
    //   this.router.navigate(['gm/dashboard']);
    // }
    // if( data.get('loginType') == '4'){
    //   this.router.navigate(['sm/dashboard']);
    // }
    // if( data.get('loginType') == '5'){
    //   this.router.navigate(['dsm/dashboard']);
    // }
    // if( data.get('loginType') == '6'){
    //   this.router.navigate(['sa/dashboard']);
    // }
  }
  logout() {
    localStorage.clear();
    this.isAuthenticated = false;
    this.router.navigate(['login']);
    
  }
  isAuthenticatedUser() {
    return this.isAuthenticated;
  }
  // Get the user's login type
  getUserLoginType() {
    console.log("this.userLoginType;",this.userLoginType);
    
    return this.userLoginType;
  }
  private profileImageUrlSource = new BehaviorSubject<string>('');
  profileImageUrl$ = this.profileImageUrlSource.asObservable();


  updateProfileImageUrl(url: string): void {
    this.profileImageUrlSource.next(url);
    
  }

}