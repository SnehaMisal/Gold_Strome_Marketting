import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AdminListService } from 'src/app/services/admin-list.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-edit-gm',
  templateUrl: './add-edit-gm.component.html',
  styleUrls: ['./add-edit-gm.component.scss']
})
export class AddEditGmComponent implements OnInit {
  selectedCEO: any;
  createGM: any;
  respdata: any;
  submitted: any;
  submissionTime!: Date;
  id: any;

  ceoList: any[] = [];
  constructor(private http: HttpClient,private formBuilder: FormBuilder, private service: AdminListService, private dialogref: MatDialogRef<AddEditGmComponent>,
    @Inject (MAT_DIALOG_DATA) public  data:any, private toastr: ToastrService) {
      this.createGM = this.formBuilder.group(
        {
          nameGM: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]*$/)]],
          mobileNumber:['', [Validators.required, Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]],
          email: ['', [
            Validators.required,
            Validators.email,
          ],],
          CEO_Name:[null, Validators.required],
          //adminAccess:['', Validators.required],
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
    console.log("this.data",this.data);
    
    this.getCEOList();
    
    if (this.data) {
      this.createGM.patchValue(this.data)
    }    
    
  }

  getCEOList(){
    this.http.get(environment.apiUrl + 'getSelectCEOList').subscribe(
      (response: any) => {
        this.ceoList = response.CEOs_List;
        console.log("this.ceoList",this.ceoList);
        if (this.data) {
          const ceoUser = {
            _id: this.data.CEO_Id,
            name: this.data.CEO_Name
          };
          const selectedCeo = this.ceoList.find(user => user._id === ceoUser._id);
          if (selectedCeo) {
            this.createGM.patchValue({ CEO_Name: selectedCeo }); // Patch the value of the form control
            console.log("ceoUser ", ceoUser);
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
    if (this.createGM.invalid) {
      return;
    }
    if (this.submitted) {

      
      if(this.data){
        const selectedCeoUser = this.createGM.value.CEO_Name;

        var formData: any = new FormData();
        formData.append('CEO_Id', selectedCeoUser._id);
        formData.append('CEO_Name', selectedCeoUser.name);
        formData.append('nameGM', this.createGM.value.nameGM);
        formData.append('email', this.createGM.value.email);
        formData.append('mobileNumber', this.createGM.value.mobileNumber);
        formData.append('password', this.createGM.value.password);
        for (const pair of formData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
        this.service.updateGM(this.data._id,formData).subscribe({
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
        const selectedCeoUser = this.createGM.value.CEO_Name;

        var formData: any = new FormData();
        formData.append('CEO_Id', selectedCeoUser._id);
        formData.append('CEO_Name', selectedCeoUser.name);
        formData.append('nameGM', this.createGM.value.nameGM);
        formData.append('email', this.createGM.value.email);
        formData.append('mobileNumber', this.createGM.value.mobileNumber);
        formData.append('password', this.createGM.value.password);
        for (const pair of formData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
        this.service.createGM(formData).subscribe({
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
