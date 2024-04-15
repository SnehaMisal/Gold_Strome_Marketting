import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CeoLoginService } from 'src/app/services/ceo-login.service';
import { environment } from 'src/environments/environment';

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
  gmList: any[] = [];
  constructor(private http: HttpClient,private service : CeoLoginService,private formBuilder: FormBuilder,  private dialogref: MatDialogRef<AddEditSmComponent>,
    @Inject (MAT_DIALOG_DATA) public  data:any, private toastr: ToastrService) {
    this.createSM = this.formBuilder.group(
      {
        nameSM: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]*$/)]],
        mobileNumber:['', [Validators.required, Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]],
        email: ['', [
          Validators.required,
          Validators.email,
        ],],
        GM_Name:['', Validators.required],
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
    this.getGMList();
    console.log("this.data",this.data);
    if (this.data) {
      this.createSM.patchValue(this.data)
    }   
  }

  getGMList(){
    this.http.get(environment.apiUrl + 'getSelect_CEO_GM_List').subscribe(
      (response: any) => {
         this.gmList = response.All_GMs;
        if (this.data) {
          const gmUser = {
            _id: this.data.GM_Id,
            nameGM: this.data.GM_Name
          };
          const selectedGM = this.gmList.find(user => user._id === gmUser._id);
          if (selectedGM) {
            this.createSM.patchValue({ GM_Name: selectedGM }); // Patch the value of the form control
            console.log("gmUser ", gmUser);
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
    if (this.createSM.invalid) {
      return;
    }
    if (this.submitted) {

      if(this.data){
        const selectedCeoUser = this.createSM.value.GM_Name;
        var formData: any = new FormData();
        formData.append('GM_Id', selectedCeoUser._id);
        formData.append('GM_Name', selectedCeoUser.nameGM);
        formData.append('nameSM', this.createSM.value.nameSM);
        formData.append('email', this.createSM.value.email);
        formData.append('mobileNumber', this.createSM.value.mobileNumber);
        formData.append('password', this.createSM.value.password);
        for (const pair of formData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
        this.service.updateSM(this.data._id,formData).subscribe({
          next:(res:any)=>{
            console.log("rses",res);
              
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
        const selectedCeoUser = this.createSM.value.GM_Name;
        var formData: any = new FormData();
        formData.append('GM_Id', selectedCeoUser._id);
        formData.append('GM_Name', selectedCeoUser.nameGM);
        formData.append('nameSM', this.createSM.value.nameSM);
        formData.append('email', this.createSM.value.email);
        formData.append('mobileNumber', this.createSM.value.mobileNumber);
        formData.append('password', this.createSM.value.password);

        for (const pair of formData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
        this.service.createSM(formData).subscribe({
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
