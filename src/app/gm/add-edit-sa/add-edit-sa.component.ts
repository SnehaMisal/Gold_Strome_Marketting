import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { GmLoginService } from 'src/app/services/gm-login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-edit-sa',
  templateUrl: './add-edit-sa.component.html',
  styleUrls: ['./add-edit-sa.component.scss']
})
export class AddEditSaComponent implements OnInit {
  createSA: any;
  respdata: any;
  submitted: any;
  submissionTime!: Date;
  id: any;
  smList: any[] = [];
  constructor(private service: GmLoginService, private http: HttpClient,private formBuilder: FormBuilder,  private dialogref: MatDialogRef<AddEditSaComponent>,
    @Inject (MAT_DIALOG_DATA) public  data:any, private toastr: ToastrService) { 
    this.createSA = this.formBuilder.group(
      {
        nameSA: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]*$/)]],
        mobileNumber:['', [Validators.required, Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]],
        email: ['', [
          Validators.required,
          Validators.email,
        ],],
        SM_Name:['', Validators.required],
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
    this.getSMList();
    if (this.data) {
      this.createSA.patchValue(this.data)
    } 
  }
  getSMList(){
    this.http.get(environment.apiUrl + 'getAllSMunderGM').subscribe(
      (response: any) => {
         this.smList = response.data.SMs;
          if (this.data) {
          
          const smUser = {
            id: this.data.SM_Id,
            nameGM: this.data.SM_Name
          };
          const selectedSM = this.smList.find(user => user.id === smUser.id);
          if (selectedSM ) {
            this.createSA.patchValue({ 
              SM_Name: selectedSM ,
              
            }); // Patch the value of the form control
            
          } else {
            console.error("CEO user not found in the list");
          }
          
        }
      },
      (error: any) => console.log(error)
    );
  }
  onSubmit(){
    this.submitted = true;
    if (this.createSA.invalid) {
      return;
    }
    if (this.submitted) {
      if(this.data){
        const selectedSMUser = this.createSA.value.SM_Name;
        var formData: any = new FormData();
        formData.append('SM_Id', selectedSMUser.id);
        formData.append('SM_Name', selectedSMUser.nameSM);
        formData.append('nameSA', this.createSA.value.nameSA);
        formData.append('email', this.createSA.value.email);
        formData.append('mobileNumber', this.createSA.value.mobileNumber);
        formData.append('password', this.createSA.value.password);
        for (const pair of formData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
        this.service.updateSA(this.data._id,formData).subscribe({
          next:(res:any)=>{
            if(res.error_code == 400){
              this.toastr.success(res.message);
            }
            else if(res.error_code == 200){
              this.toastr.success(res.message);
              this.dialogref.close(true)
            }
          },
          error:(err:any)=>{
            alert(err);
          }
        })
      }else{
        const selectedSMUser = this.createSA.value.SM_Name;
        var formData: any = new FormData();
        formData.append('SM_Id', selectedSMUser.id);
        formData.append('SM_Name', selectedSMUser.nameSM);
        formData.append('nameSA', this.createSA.value.nameSA);
        formData.append('email', this.createSA.value.email);
        formData.append('mobileNumber', this.createSA.value.mobileNumber);
        formData.append('password', this.createSA.value.password);
        for (const pair of formData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
        this.service.createSA(formData).subscribe({
          next:(res:any)=>{
            if(res.error_code == 400){
              this.toastr.success(res.message);
            }
            else if(res.error_code == 200){
              this.toastr.success(res.message);
              this.dialogref.close(true)
            }
          },
          error:(err:any)=>{
            alert(err);
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
