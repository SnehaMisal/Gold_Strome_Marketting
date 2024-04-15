import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { GmLoginService } from 'src/app/services/gm-login.service';

@Component({
  selector: 'app-add-edit-sm',
  templateUrl: './add-edit-sm.component.html',
  styleUrls: ['./add-edit-sm.component.scss']
})
export class AddEditSmComponent implements OnInit {
  createSM: any;
  respdata: any;
  submitted: any;
  submissionTime!: Date;
  id: any;
  constructor(private formBuilder: FormBuilder,private service: GmLoginService,  private dialogref: MatDialogRef<AddEditSmComponent>,
    @Inject (MAT_DIALOG_DATA) public  data:any, private toastr: ToastrService) {
      this.createSM = this.formBuilder.group(
        {
          nameSM: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]*$/)]],
          mobileNumber:['', [Validators.required, Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]],
          email: ['', [
            Validators.required,
            Validators.email,
          ],],
          // ceoList:['', Validators.required],
          // district:['', Validators.required],
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
    if (this.data) {
      this.createSM.patchValue(this.data)
    } 
  }
  onSubmit(){
    this.submitted = true;
    if (this.createSM.invalid) {
      return;
    }
    if (this.submitted) {
      if(this.data){
        var formData: any = new FormData();
        formData.append('nameSM', this.createSM.value.nameSM);
        formData.append('email', this.createSM.value.email);
        formData.append('password', this.createSM.value.password);
        formData.append('mobileNumber', this.createSM.value.mobileNumber);
        for (const pair of formData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
        this.service.updateSM(this.data._id,formData).subscribe({
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
        formData.append('nameSM', this.createSM.value.nameSM);
        formData.append('email', this.createSM.value.email);
        formData.append('password', this.createSM.value.password);
        formData.append('mobileNumber', this.createSM.value.mobileNumber);
        for (const pair of formData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
        this.service.createSM(formData).subscribe({
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
