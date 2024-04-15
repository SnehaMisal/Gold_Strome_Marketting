import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AdminListService } from 'src/app/services/admin-list.service';
import { CeoLoginService } from 'src/app/services/ceo-login.service';

@Component({
  selector: 'app-add-edit-gm',
  templateUrl: './add-edit-gm.component.html',
  styleUrls: ['./add-edit-gm.component.scss']
})
export class AddEditGmComponent implements OnInit {
  createGM: any;
  respdata: any;
  submitted: any;
  submissionTime!: Date;
  id: any;
  constructor(private formBuilder: FormBuilder,private service: CeoLoginService,  private dialogref: MatDialogRef<AddEditGmComponent>,
    @Inject (MAT_DIALOG_DATA) public  data:any, private toastr: ToastrService) {
    this.createGM = this.formBuilder.group(
      {
        nameGM: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]*$/)]],
        mobileNumber:['', [Validators.required, Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]],
        email: ['', [
          Validators.required,
          Validators.email,
        ],],
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
    if (this.data) {
      this.createGM.patchValue(this.data)
    } 
  }
  onSubmit(){
    this.submitted = true;
    if (this.createGM.invalid) {
      return;
    }
    if (this.submitted) {

      
      if(this.data){
        var formData: any = new FormData();
        formData.append('nameGM', this.createGM.value.nameGM);
        formData.append('email', this.createGM.value.email);
        formData.append('password', this.createGM.value.password);
        formData.append('mobileNumber', this.createGM.value.mobileNumber);
        for (const pair of formData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
        this.service.updateGM(this.data._id,formData).subscribe({
          next:(response:any)=>{

            if(response.error_code == 400){
              this.toastr.success(response.message);
            }
            else if(response.error_code == 200){
              this.toastr.success(response.message);
              this.dialogref.close(true)
            }
            console.log("val",response);
          },
          error:(err:any)=>{
            //  alert(err);
             console.log(err);
          }
        })
      }else{
        var formData: any = new FormData();
        formData.append('nameGM', this.createGM.value.nameGM);
        formData.append('email', this.createGM.value.email);
        formData.append('password', this.createGM.value.password);
        formData.append('mobileNumber', this.createGM.value.mobileNumber);
        for (const pair of formData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
        this.service.createGM(formData).subscribe({
          next:(response:any)=>{

            if(response.error_code == 400){
              this.toastr.success(response.message);
            }
            else if(response.error_code == 200){
              this.toastr.success(response.message);
              this.dialogref.close(true)
            }
            console.log("val",response);
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
