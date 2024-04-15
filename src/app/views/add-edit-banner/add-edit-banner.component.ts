import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-edit-banner',
  templateUrl: './add-edit-banner.component.html',
  styleUrls: ['./add-edit-banner.component.scss']
})
export class AddEditBannerComponent implements OnInit {
  bannerForm:any;
  fileInputInvalid = false;
  submitted: any;
  imgURL: any;
  constructor(private formBuilder: FormBuilder,private toastr: ToastrService, private dialogref: MatDialogRef<AddEditBannerComponent>, @Inject (MAT_DIALOG_DATA) public  data:any, private http: HttpClient) { 
    this.bannerForm = this.formBuilder.group({
      Title:['', Validators.required],
      // BannerImage:[null, this.data ? null : Validators.required],
      BannerImage:[null]
    })
    if (this.data) {
      this.bannerForm.patchValue(this.data);
      const { BannerImage, Title} = this.data;
      if (this.data.BannerImage) {
        this.imgURL = this.data.BannerImage;
        this.img_name = this.data.BannerImage;
      }
      // If editing, remove the required validator from BannerImage
      // this.bannerForm.get('BannerImage').clearValidators();
      // this.bannerForm.get('BannerImage').updateValueAndValidity();
    }
  }

  ngOnInit(): void {
    
    // if(this.data){
    //   this.bannerForm.patchValue(this.data)
    //   const { BannerImage, Title} = this.data;
    //   if (this.data.BannerImage) {
    //     this.imgURL = this.data.BannerImage;
    //     this.img_name = this.data.BannerImage;
    //   }
    // }
  
      
  }
  onSubmit(){
    // if (!this.selectedFile) {
    //   // Handle the case where no file is selected.
    //   return;
    // }
    this.submitted = true;
    if (this.bannerForm.invalid) {
      return;
    }
    if (this.submitted) {
      
     
     if(this.data){
      var formData: any = new FormData();
      formData.append('bannerId', this.data.bannerId);
      formData.append('bannerName', this.bannerForm.value.Title);
      formData.append('bannerImage', this.selectedFile);
      for (const pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
      }
      this.http.put(environment.apiUrl + 'updateBanner', formData).subscribe(
        (response: any) => {
          console.log("response",response);
          this.toastr.success(response.message);
          this.dialogref.close(true);
        },
        (error: any) => console.log(error)
      );
     }else{
      var formData: any = new FormData();
      formData.append('bannerName', this.bannerForm.value.Title);
      formData.append('bannerImage', this.selectedFile);
      
            for (const pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
      }
      this.http.post(environment.apiUrl + 'createBanner', formData).subscribe(
        (response: any) => {
          if(response.error_code == 200){
            console.log("response",response);
            this.toastr.success(response.message);
            this.dialogref.close(true);
          }
          else if(response.error_code == 400){
            this.toastr.error(response.message);
          }
          
        },
        (error: any) => console.log(error)
      );
     }
     

   }
  }
  onImageSelected(event: any) {
    const file = event.target.files[0];
    
    if (file) {
      this.bannerForm.prodImage = file.name;
      console.log("this.bannerForm.prodImage",this.bannerForm.prodImage)
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
  this.img_name=fileName
  this.selectedFileNames.push(fileName);
  console.log(fileName); 

}
}
