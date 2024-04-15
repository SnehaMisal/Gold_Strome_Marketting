import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CeoLoginService } from 'src/app/services/ceo-login.service';
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
  gmList: any[] = [];
  smList: any[] = [];
  constructor(private service : CeoLoginService,private http: HttpClient,private formBuilder: FormBuilder,  private dialogref: MatDialogRef<AddEditSaComponent>,
    @Inject (MAT_DIALOG_DATA) public  data:any, private toastr: ToastrService) {
    this.createSA = this.formBuilder.group(
      {
        nameSA: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]*$/)]],
        mobileNumber:['', [Validators.required, Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]],
        email: ['', [
          Validators.required,
          Validators.email,
        ],],

        GM_Name:['', Validators.required],
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
    this.getGMList();
    if (this.data) {
      this.createSA.patchValue(this.data)
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
          this.selectGM(gmUser)
          
          const selectedGM = this.gmList.find(user => user._id === gmUser._id);
          if (selectedGM ) {
            this.createSA.patchValue({ 
              GM_Name: selectedGM ,
              
            }); // Patch the value of the form control
            
          } else {
            console.error("CEO user not found in the list");
          }
          
        }
      },
      (error: any) => console.log(error)
    );
  }
  selectGM(gm_name:any){
    this.http.get(environment.apiUrl + 'get_SM_List_from_GM/'+gm_name._id).subscribe(
      (response: any) => {
        if(response.error_code === 200){
          this.smList = response.data.SMsUnderGM;
          if (this.data) {
              const smUser = {
                _id: this.data.SM_Id,
                nameSM: this.data.SM_Name
              };
            const selectedSM = this.smList.find(user => user._id === smUser._id);
            if (selectedSM ) {
              this.createSA.patchValue({ 
                 SM_Name: selectedSM
              }); // Patch the value of the form control
            } else {
              console.error("CEO user not found in the list");
            }
          }
          
        }
        else if(response.error_code === 404){
          this.smList = [];
          this.toastr.error(response.message);
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
        const selectedGMUser = this.createSA.value.GM_Name;
        const selectedSMUser = this.createSA.value.SM_Name;
        var formData: any = new FormData();
        formData.append('GM_Id', selectedGMUser._id);
        formData.append('GM_Name', selectedGMUser.nameGM);
        formData.append('SM_Id', selectedSMUser._id);
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
        const selectedGMUser = this.createSA.value.GM_Name;
        const selectedSMUser = this.createSA.value.SM_Name;
        var formData: any = new FormData();
        formData.append('GM_Id', selectedGMUser._id);
        formData.append('GM_Name', selectedGMUser.nameGM);
        formData.append('SM_Id', selectedSMUser._id);
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
