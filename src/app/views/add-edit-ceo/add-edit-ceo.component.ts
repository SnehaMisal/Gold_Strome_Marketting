import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AdminListService } from 'src/app/services/admin-list.service';

@Component({
  selector: 'app-add-edit-ceo',
  templateUrl: './add-edit-ceo.component.html',
  styleUrls: ['./add-edit-ceo.component.scss']
})
export class AddEditCeoComponent implements OnInit {

  createAdmin: any;
  respdata: any;
  submitted: any;
  submissionTime!: Date;
  id: any;
  constructor(private formBuilder: FormBuilder, private service: AdminListService, private dialogref: MatDialogRef<AddEditCeoComponent>,
    @Inject (MAT_DIALOG_DATA) public  data:any, private toastr: ToastrService) { 
    this.createAdmin = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]*$/)]],
        mobileNumber:['', [Validators.required, Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]],
        email: ['', [
          Validators.required,
          Validators.email,
        ],],
        // adminType:['', Validators.required],
        // adminAccess:['', Validators.required],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
      },
    );
  }

  ngOnInit(): void {
    this.createAdmin.patchValue(this.data)
  }
  onSubmit(){
    this.submitted = true;
    if (this.createAdmin.invalid) {
      return;
    }
    if (this.submitted) {
      if(this.data){
        var formData: any = new FormData();
        formData.append('name', this.createAdmin.value.name);
        formData.append('email', this.createAdmin.value.email);
        formData.append('password', this.createAdmin.value.password);
        formData.append('mobileNumber', this.createAdmin.value.mobileNumber);
        for (const pair of formData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
        this.service.updateAdmin(this.data._id,formData).subscribe({
          next:(res:any)=>{
            console.log("res",res);
            if(res.error_code == 200){
              this.toastr.success(res.message);
              this.dialogref.close(true)
            }else if(res.error_code == 400){
              this.toastr.success(res.message);
            }
            
          },
          error:(err:any)=>{
            // alert(err);
            console.log(err);
            
          }
        })
      }else{
        var formData: any = new FormData();
        formData.append('name', this.createAdmin.value.name);
        formData.append('email', this.createAdmin.value.email);
        formData.append('password', this.createAdmin.value.password);
        formData.append('mobileNumber', this.createAdmin.value.mobileNumber);
        for (const pair of formData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
        this.service.createAdmin(formData).subscribe({
          next:(response:any)=>{

            if(response.error_code == 400){
              this.toastr.success(response.message);
            }
            else if(response.error_code == 200){
              this.toastr.success(response.message);
              this.dialogref.close(true)
            }
            console.log("val",response);
            
            
            //this.dialogref.close(false)
          },
          error:(err:any)=>{
            //  alert(err);
             console.log(err);
          }
        })
      }
     
    }
  }
  onMobileInputChange(event: any): void {

    event.target.value = event.target.value.replace(/[^0-9]/g, '');
    if (event.target.value.length > 10) {
      event.target.value = event.target.value.slice(0, 10);
    }
  }
}
