import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from './ConfirmedValidator';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  adminPassword: any;
  submitted!: boolean;

  form: FormGroup = new FormGroup({});
  adminProfileForm : any;
  myForm: any;
  imgURL: any;
  loginType: any;
  profileName: any;
  loginName: any;
  userLoginType: any;
  constructor(private commonService: CommonService ,private router: Router, private formBuilder: FormBuilder,private http: HttpClient,private toastr: ToastrService,) {
    this.adminPassword= this.formBuilder.group({
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ],
      newPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ],
      confPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ],
    },
    {validator:confirmPasswordValidator('newPassword', 'confPassword')}
    ),
    this.adminProfileForm= this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]*$/)]],
      number:['', [Validators.required, Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]],
      email: ['', [
        Validators.required,
        Validators.email,
        // Validators.pattern(
        //   '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$'
        // ),
      ],],
      // adminProfile:[null]
    })
   }
   ngOnInit(): void {
    this.userLoginType = localStorage.getItem('loginType');
    this.getLoginProfile() 
   }
   getLoginProfile(){
    if(this.userLoginType == 'Admin'){
      this.http
        .get(environment.apiUrl + 'getAdminProfile')
        .subscribe((res: any) => {
          this.loginName= res.obj.name;
          let data={
            name : res.obj.name,
            email: res.obj.email,
            number: res.obj.number,
          }
          this.imgURL = res.obj.profileImage;
          console.log("profile res",res);
          this.adminProfileForm.patchValue(data)
        });
      }else if(this.userLoginType == 'CEO'){
        this.http
        .get(environment.apiUrl + 'getCEOAdminProfile')
        .subscribe((res: any) => {
          this.loginName= res.obj.name;
          let data={
            name : res.obj.name,
            email: res.obj.email,
            number: res.obj.mobileNumber,
          }
          this.imgURL = res.obj.profileImage;
          console.log("profile res",res);
          this.adminProfileForm.patchValue(data)
        });
      }
      else if(this.userLoginType == 'GM'){
        this.http
        .get(environment.apiUrl + 'getGMAdminProfile')
        .subscribe((res: any) => {
          this.loginName= res.obj.name;
          let data={
            name : res.obj.nameGM,
            email: res.obj.email,
            number: res.obj.mobileNumber,
          }
          this.imgURL = res.obj.profileImage;
          console.log("profile res",res);
          this.adminProfileForm.patchValue(data)
        });
      }else if(this.userLoginType == 'SM'){
        this.http
        .get(environment.apiUrl + 'getSMAdminProfile')
        .subscribe((res: any) => {
          this.loginName= res.obj.name;
          let data={
            name : res.obj.nameSM,
            email: res.obj.email,
            number: res.obj.mobileNumber,
          }
          this.imgURL = res.obj.profileImage;
          console.log("profile res",res);
          this.adminProfileForm.patchValue(data)
        });
      }else if(this.userLoginType == 'DSM'){
        this.http
        .get(environment.apiUrl + 'getDSMAdminProfile')
        .subscribe((res: any) => {
          this.loginName= res.obj.name;
          let data={
            name : res.obj.nameDSM,
            email: res.obj.email,
            number: res.obj.mobileNumber,
          }
          this.imgURL = res.obj.profileImage;
          console.log("profile res",res);
          this.adminProfileForm.patchValue(data)
        });
      }else if(this.userLoginType == 'SA'){
        this.http
        .get(environment.apiUrl + 'get_SAAdminProfile')
        .subscribe((res: any) => {
          this.loginName= res.obj.name;
          let data={
            name : res.obj.nameSA,
            email: res.obj.email,
            number: res.obj.mobileNumber,
          }
          this.imgURL = res.obj.profileImage;
          console.log("profile res",res);
          this.adminProfileForm.patchValue(data)
        });
      }
   }
  onSubmit(): void {
    this.submitted = true;
    if (this.adminPassword.invalid) {
      return;
    }
    if (this.submitted) {
      var formData: any = new FormData();
      formData.append('currentPassword', this.adminPassword.value.password);
      formData.append('newPassword', this.adminPassword.value.newPassword);
      formData.append('confirmPassword', this.adminPassword.value.confPassword);
      for (const pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
      }
      if(this.userLoginType == 'Admin'){
        this.http.put(environment.apiUrl + 'updatePassword', formData).subscribe(
          (response: any) => {
            console.log("response",response);
            if(response.error_code==200){
              this.toastr.success(response.message);
              localStorage.clear();
              this.commonService.logout()
            }
            if(response.error_code==400){
              this.toastr.error(response.message);
            }
          },
          (error: any) => console.log(error)
        );
      }else if(this.userLoginType == 'CEO'){
        this.http.put(environment.apiUrl + 'updateCEOAdminPassword', formData).subscribe(
          (response: any) => {
            console.log("response",response);
            if(response.error_code==200){
              this.toastr.success(response.message);
              localStorage.clear();
              this.commonService.logout()
            }
            if(response.error_code==400){
              this.toastr.error(response.message);
            }
          },
          (error: any) => console.log(error)
        );
      }else if(this.userLoginType == 'GM'){
        this.http.put(environment.apiUrl + 'updateGMAdminPassword', formData).subscribe(
          (response: any) => {
            console.log("response",response);
            if(response.error_code==200){
              this.toastr.success(response.message);
              localStorage.clear();
              this.commonService.logout()
            }
            if(response.error_code==400){
              this.toastr.error(response.message);
            }
          },
          (error: any) => console.log(error)
        );
      }else if(this.userLoginType == 'SM'){
        this.http.put(environment.apiUrl + 'updateSMAdminPassword', formData).subscribe(
          (response: any) => {
            console.log("response",response);
            if(response.error_code==200){
              this.toastr.success(response.message);
              localStorage.clear();
              this.commonService.logout()
            }
            if(response.error_code==400){
              this.toastr.error(response.message);
            }
          },
          (error: any) => console.log(error)
        );
      }else if(this.userLoginType == 'DSM'){
        this.http.put(environment.apiUrl + 'updateDSMAdminPassword', formData).subscribe(
          (response: any) => {
            console.log("response",response);
            if(response.error_code==200){
              this.toastr.success(response.message);
              localStorage.clear();
              this.commonService.logout()
            }
            if(response.error_code==400){
              this.toastr.error(response.message);
            }
          },
          (error: any) => console.log(error)
        );
      }else if(this.userLoginType == 'SA'){
        this.http.put(environment.apiUrl + 'update_SAAdminPassword', formData).subscribe(
          (response: any) => {
            console.log("response",response);
            if(response.error_code==200){
              this.toastr.success(response.message);
              localStorage.clear();
              this.commonService.logout()
              
            }
            if(response.error_code==400){
              this.toastr.error(response.message);
            }
          },
          (error: any) => console.log(error)
        );
      }
      
    }

  }

  onSubmitForm(){
    this.submitted = true;

    if (this.adminProfileForm.invalid) {
      return;
    }
    if (this.submitted) {
      if(this.userLoginType == 'Admin'){
        var formData: any = new FormData();
        formData.append('name', this.adminProfileForm.value.name);
        formData.append('email', this.adminProfileForm.value.email);
        formData.append('number', this.adminProfileForm.value.number);
        for (const pair of formData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
        this.http.put(environment.apiUrl + 'updateAdmin', formData).subscribe(
          (response: any) => {
            if(response.error_code == 200){
              this.toastr.success(response.message);
            }
            else if(response.error_code == 400){
              this.toastr.error(response.message);
              localStorage.clear();
              this.commonService.logout()
            }
          },
          (error: any) => console.log(error)
        );
      }else if(this.userLoginType == 'CEO'){
        var formData: any = new FormData();
        formData.append('name', this.adminProfileForm.value.name);
        formData.append('email', this.adminProfileForm.value.email);
        formData.append('mobileNumber', this.adminProfileForm.value.number);
        for (const pair of formData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
        this.http.put(environment.apiUrl + 'updateCEOAdmin', formData).subscribe(
          (response: any) => {
            if(response.error_code == 200){
              this.toastr.success(response.message);
            }
            else if(response.error_code == 400){
              this.toastr.error(response.message);
              localStorage.clear();
              this.commonService.logout()
            }
          },
          (error: any) => console.log(error)
        );
      }else if(this.userLoginType == 'GM'){
        var formData: any = new FormData();
        formData.append('nameGM', this.adminProfileForm.value.name);
        formData.append('email', this.adminProfileForm.value.email);
        formData.append('mobileNumber', this.adminProfileForm.value.number);
        for (const pair of formData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
        this.http.put(environment.apiUrl + 'updateGMAdmin', formData).subscribe(
          (response: any) => {
            if(response.error_code == 200){
              this.toastr.success(response.message);
            }
            else if(response.error_code == 400){
              this.toastr.error(response.message);
              localStorage.clear();
              this.commonService.logout()
            }
          },
          (error: any) => console.log(error)
        );
      }else if(this.userLoginType == 'SM'){
        var formData: any = new FormData();
        formData.append('nameSM', this.adminProfileForm.value.name);
        formData.append('email', this.adminProfileForm.value.email);
        formData.append('mobileNumber', this.adminProfileForm.value.number);
        for (const pair of formData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
        this.http.put(environment.apiUrl + 'updateSMAdmin', formData).subscribe(
          (response: any) => {
            if(response.error_code == 200){
              this.toastr.success(response.message);
            }
            else if(response.error_code == 400){
              this.toastr.error(response.message);
              localStorage.clear();
              this.commonService.logout()
            }
          },
          (error: any) => console.log(error)
        );
      }else if(this.userLoginType == 'DSM'){
        var formData: any = new FormData();
        formData.append('nameDSM', this.adminProfileForm.value.name);
        formData.append('email', this.adminProfileForm.value.email);
        formData.append('mobileNumber', this.adminProfileForm.value.number);
        for (const pair of formData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
        this.http.put(environment.apiUrl + 'updateDSMAdmin', formData).subscribe(
          (response: any) => {
            if(response.error_code == 200){
              this.toastr.success(response.message);
            }
            else if(response.error_code == 400){
              this.toastr.error(response.message);
              localStorage.clear();
              this.commonService.logout()
            }
          },
          (error: any) => console.log(error)
        );
      }
      else if(this.userLoginType == 'SA'){
        var formData: any = new FormData();
        formData.append('nameSA', this.adminProfileForm.value.name);
        formData.append('email', this.adminProfileForm.value.email);
        formData.append('mobileNumber', this.adminProfileForm.value.number);
        for (const pair of formData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
        this.http.put(environment.apiUrl + 'updateSAAdmin', formData).subscribe(
          (response: any) => {
            // console.log("response",response);
            if(response.error_code==200){ 

              if(response.error_code == 200){
                this.toastr.success(response.message);
              }
              else if(response.error_code == 400){
                this.toastr.error(response.message);
                localStorage.clear();
                this.commonService.logout()
              }

            }else if(response.error_code==400 ){
              this.toastr.error(response.message);
            }
             
          },
          (error: any) => console.log(error)
        );
      }
    }
  }
  onMobileInputChange(event: any): void {

    event.target.value = event.target.value.replace(/[^0-9]/g, '');
    if (event.target.value.length > 10) {
      event.target.value = event.target.value.slice(0, 10);
    }
  }
  onImageSelected(event: any) {
    const file = event.target.files[0];
    
    if (file) {
      this.adminProfileForm.prodImage = file.name;
      console.log("this.bannerForm.prodImage",this.adminProfileForm.prodImage)
    }
  }
  selectedFile: any;
  img_name:any
  selectedFileNames: any[] = [];
  onFileSelected(event: any): void {
    let render = new FileReader()
    render.readAsDataURL(event.target.files[0]);
    render.onload = () =>{
      this.imgURL=render.result
    }
    this.selectedFile = event.target.files[0];
    console.log("this.selectedFile",this.selectedFile);
    this.imgURL= this.selectedFile
    const fileName = this.selectedFile.name;
    this.profileName= this.selectedFile.name;
    this.img_name=fileName
    this.selectedFileNames.push(fileName);
    console.log(fileName); 
    var formDataProfile: any = new FormData();
    formDataProfile.append('adminProfile', this.selectedFile);
    for (const pair of formDataProfile.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }
    if(this.userLoginType == 'Admin'){
      this.http.put<any>(environment.apiUrl+'update_admin_image', formDataProfile)
      .subscribe(res => {
        console.log(res);
        this.toastr.success(res.message);
        this.commonService.updateProfileImageUrl(res.profileImage);
      });
      
    }else if(this.userLoginType == 'CEO'){
      this.http.put<any>(environment.apiUrl+'update_CEOAdmin_image', formDataProfile)
      .subscribe(res => {
        console.log(res);
        this.toastr.success(res.message);
        this.commonService.updateProfileImageUrl(res.profileImage);
      });
      
    }else if(this.userLoginType == 'GM'){
      this.http.put<any>(environment.apiUrl+'update_GMAdmin_image', formDataProfile)
      .subscribe(res => {
        console.log(res);
        this.toastr.success(res.message);
        this.commonService.updateProfileImageUrl(res.profileImage);
      });
    }else if(this.userLoginType == 'SM'){
      this.http.put<any>(environment.apiUrl+'update_SMAdmin_image', formDataProfile)
      .subscribe(res => {
        console.log(res);
        this.toastr.success(res.message);
        this.commonService.updateProfileImageUrl(res.profileImage);
      });
    }else if(this.userLoginType == 'DSM'){
      this.http.put<any>(environment.apiUrl+'update_DSMAdmin_image', formDataProfile)
      .subscribe(res => {
        console.log(res);
        this.toastr.success(res.message);
        this.commonService.updateProfileImageUrl(res.profileImage);
      });
    }else if(this.userLoginType == 'SA'){
      this.http.put<any>(environment.apiUrl+'update_SAAdmin_image', formDataProfile)
      .subscribe(res => {
        console.log(res);
        this.toastr.success(res.message);
        this.commonService.updateProfileImageUrl(res.profileImage);
      });
    }
  }
}