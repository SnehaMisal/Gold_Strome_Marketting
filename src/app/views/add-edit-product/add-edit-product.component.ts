import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import {  AfterViewInit, ViewChild } from '@angular/core';
import { AdminListService } from 'src/app/services/admin-list.service';

declare var $: any; 
@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})

export class AddEditProductComponent implements OnInit {
  voucherForm:any;
  submitted: any;
  imgURL: any;
  content: string = '';
  // fileToUpload!: File;
  imageFile!: File;
  config = {
    placeholder: 'Enter text here',
    tabsize: 2,
    height: 150, // Provide the height as a number
    // uploadImagePath: '/your-upload-endpoint', // Replace with your actual image upload endpoint
    toolbar: [
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['font', ['strikethrough', 'superscript', 'subscript']],
      ['para', ['ul', 'ol']],
      ['insert', ['link']],
      ['view', ['fullscreen', 'codeview']],
    ],
    fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Times New Roman'],
  };
  
  constructor(private formBuilder: FormBuilder, private service: AdminListService, private toastr: ToastrService,private dialogref: MatDialogRef<AddEditProductComponent>, @Inject (MAT_DIALOG_DATA) public  data:any) { 
    this.voucherForm = this.formBuilder.group({
      VoucherName:['', Validators.required],
      voucherPrice:['', Validators.required],
      VoucherImage:[null],
      voucherDescription:['', Validators.required],
    })
    if (this.data) {
      this.voucherForm.patchValue(this.data);
      //const { VoucherImage} = this.data;
      if (this.data.VoucherImage) {
        this.imgURL = this.data.VoucherImage;
        this.img_name = this.data.VoucherImage;
      }
      // If editing, remove the required validator from BannerImage
      // this.bannerForm.get('BannerImage').clearValidators();
      // this.bannerForm.get('BannerImage').updateValueAndValidity();
    }
  }

  ngOnInit(): void {
    
  //   const { VoucherImage, ...formValuesWithoutImage } = this.data;
  //   this.voucherForm.patchValue(formValuesWithoutImage);
  //   if (this.data.VoucherImage) {
  //     this.imgURL = this.data.VoucherImage;
  //     this.img_name = this.data.VoucherImage;
  // }
  }
  fileInputInvalid = false;
  onSubmit(){
    this.submitted = true;
    if (this.voucherForm.invalid) {
      return;
    }
    if (this.submitted) {
      if(this.data){
        var formData: any = new FormData();
        formData.append('voucherName', this.voucherForm.value.VoucherName);
        formData.append('voucherPrice', this.voucherForm.value.voucherPrice);
        formData.append('voucherDescription', this.voucherForm.value.voucherDescription);
        // formData.append('voucherImage', this.voucherForm.value.VoucherImage);
        formData.append('voucherImage', this.selectedFile);
        for (const pair of formData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
        this.service.updateVoucher(this.data.VoucherId, formData).subscribe({
          next:(response:any)=>{
            console.log("response",response);
            if(response.error_code == 200){
              console.log("response",response);
              this.toastr.success(response.message);
              this.dialogref.close(true);
            }
            else if(response.error_code == 400){
              this.toastr.error(response.message);
            }
          },  
          error:(err:any)=>{
            alert(err);
            console.log(err)
          }
        })
        // this.service.updateProduct(this.data.id,formData).subscribe({
        //   next:(val:any)=>{
              
        //     this.toastr.success('Product Updated  Successfully!');
        //     this.dialogref.close(true)
        //   },
        //   error:(err:any)=>{
        //     alert(err);
        //   }
        // })
      }else{
        var formData: any = new FormData();
        formData.append('voucherName', this.voucherForm.value.VoucherName);
        formData.append('voucherPrice', this.voucherForm.value.voucherPrice);
        formData.append('voucherDescription', this.voucherForm.value.voucherDescription);
        // formData.append('voucherImage', this.voucherForm.value.VoucherImage);
        formData.append('voucherImage', this.selectedFile);
        for (const pair of formData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
        this.service.createVoucher(formData).subscribe({
          next:(response:any)=>{
            console.log("response",response);
            if(response.error_code == 200){
              console.log("response",response);
              this.toastr.success(response.message);
              this.dialogref.close(true);
            }
            else if(response.error_code == 400){
              this.toastr.error(response.message);
            }
          },
          error:(err:any)=>{
            alert(err);
            console.log(err)
          }
        })
      }
      

    }
    
  }

  getTextWithTags() {
    const element = document.querySelector('div[innerHTML]');
    const textWithTags = element?.textContent;
    console.log(textWithTags); // This will log: "ssssssss" with <i><u><b> tags
  }
  onImageSelected(event: any) {
    const file = event.target.files[0];
    
    if (file) {
      this.voucherForm.prodImage = file.name;
      console.log("this.bannerForm.prodImage",this.voucherForm.prodImage)
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
