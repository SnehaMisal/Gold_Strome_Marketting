import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-sm',
  templateUrl: './add-edit-sm.component.html',
  styleUrls: ['./add-edit-sm.component.scss']
})
export class AddEditSmComponent implements OnInit {
  createAdmin: any;
  respdata: any;
  submitted: any;
  submissionTime!: Date;
  id: any;
  constructor(private formBuilder: FormBuilder,  private dialogref: MatDialogRef<AddEditSmComponent>,
    @Inject (MAT_DIALOG_DATA) public  data:any, private toastr: ToastrService) {
      this.createAdmin = this.formBuilder.group(
        {
          fName: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]*$/)]],
          mobno:['', [Validators.required, Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]],
          email: ['', [
            Validators.required,
            Validators.email,
          ],],
          ceoList:['', Validators.required],
          gmList:['', Validators.required],
          adminAccess:['', Validators.required],
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
  }
  onSubmit(){
    this.submitted = true;
    if (this.createAdmin.invalid) {
      return;
    }
    if (this.submitted) {

      const joinDate = new Date().toISOString();
      const formData = { ...this.createAdmin.value, joinDate };

      console.log(this.createAdmin.value)
      console.log("formData",formData)
      if(this.data){
        // this.service.updateAdmin(this.data.id,formData).subscribe({
        //   next:(val:any)=>{
        //     this.toastr.success('Admin Updated Successfully!');
        //     //alert("Updated succesfuly");
        //     this.dialogref.close(true)
        //   },
        //   error:(err:any)=>{
        //     alert(err);
        //   }
        // })
      }else{
        // this.service.createAdmin(formData).subscribe({
        //   next:(val:any)=>{
            
        //     this.toastr.success('Admin Created  Successfully!');
        //     this.dialogref.close(true)
        //   },
        //   error:(err:any)=>{
        //     alert(err);
        //   }
        // })
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
