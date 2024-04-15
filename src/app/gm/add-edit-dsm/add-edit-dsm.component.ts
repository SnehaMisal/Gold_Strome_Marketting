import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AdminListService } from 'src/app/services/admin-list.service';
import { GmLoginService } from 'src/app/services/gm-login.service';
import { StateCityService } from 'src/app/services/state-city.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-edit-dsm',
  templateUrl: './add-edit-dsm.component.html',
  styleUrls: ['./add-edit-dsm.component.scss']
})
export class AddEditDsmComponent implements OnInit {
  createDSM: any;
  respdata: any;
  submitted: any;
  submissionTime!: Date;
  id: any;
  smList: any[] = [];
  constructor(private http: HttpClient, private formBuilder: FormBuilder, private service: GmLoginService, private dialogref: MatDialogRef<AddEditDsmComponent>,
    @Inject (MAT_DIALOG_DATA) public  data:any, private toastr: ToastrService, private dropdownService:StateCityService) { 
    this.createDSM = this.formBuilder.group(
      {
        nameDSM: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]*$/)]],
        mobileNumber:['', [Validators.required, Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]],
        email: ['', [
          Validators.required,
          Validators.email,
        ],],
        // districtList:['', Validators.required],
        SM_Name:['', Validators.required],
        // adminAccess:['', Validators.required],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        state:['',Validators.required ],
          city:['',Validators.required ]
      },
    );
  }

  ngOnInit(): void {
    this.selectCountry(101)
    this.getSMList();
    console.log(this.data);
    
    if (this.data) {
      this.createDSM.patchValue(this.data)
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
            this.createDSM.patchValue({ 
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
    if (this.createDSM.invalid) {
      return;
    }
    if (this.submitted) {
      
     
      if(this.data){
        const selectedSMUser = this.createDSM.value.SM_Name;
        const selectedState = this.createDSM.value.state;
        const selectedCity = this.createDSM.value.city;
        var formData: any = new FormData();
        formData.append('SM_Id', selectedSMUser.id);
        formData.append('SM_Name', selectedSMUser.nameSM);
        formData.append('nameDSM', this.createDSM.value.nameDSM);
        formData.append('email', this.createDSM.value.email);
        formData.append('mobileNumber', this.createDSM.value.mobileNumber);
        formData.append('password', this.createDSM.value.password);
        formData.append('state', selectedState.name);
        formData.append('stateId', selectedState.id);
        formData.append('city', selectedCity.name);
        formData.append('cityId', selectedCity.id);
        for (const pair of formData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
        this.service.updateDSM(this.data._id,formData).subscribe({
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
        const selectedSMUser = this.createDSM.value.SM_Name;
        const selectedState = this.createDSM.value.state;
        const selectedCity = this.createDSM.value.city;
        var formData: any = new FormData();
        formData.append('SM_Id', selectedSMUser.id);
        formData.append('SM_Name', selectedSMUser.nameSM);
        formData.append('nameDSM', this.createDSM.value.nameDSM);
        formData.append('email', this.createDSM.value.email);
        formData.append('mobileNumber', this.createDSM.value.mobileNumber);
        formData.append('password', this.createDSM.value.password);
        formData.append('state', selectedState.name);
        formData.append('stateId', selectedState.id);
        formData.append('city', selectedCity.name);
        formData.append('cityId', selectedCity.id);
        for (const pair of formData.entries()) {
          console.log(`${pair[0]}, ${pair[1]}`);
        }
        this.service.createDSM(formData).subscribe({
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
  public loading = false;
  public states: any[] = [];
  public cities: any[] = [];
  public selectCountry(country: any) {
    console.log("country",country);
    this.dropdownService.getStates(country).subscribe(
      (response) => {
        this.states = response.data;
        this.loading = false;
        if (this.data) {
          const state = {
            id: this.data.stateId,
            name: this.data.state
          };
          this.selectState(state)
          const selectedState = this.states.find(user => user.id == state.id);

          console.log("selectedState",selectedState);
          if (selectedState ) {
            this.createDSM.patchValue({ 
              state: selectedState ,
              
            }); // Patch the value of the form control
            
          } else {
            console.error("state found in the list");
          }
        }
      },
      (error) => {
        console.log('Something went wrong: ', error);
      }
    );
  }
  /**
   * Selects the state and gets cities for it
   * @param state
   * @returns void
   */
  public selectState(state: any) {
    if (!state) {
      this.createDSM.controls['city'].setValue('');
      this.cities = [];
      return;
    }
    this.loading = true;
    const stateId = state.id;
    this.dropdownService.getCities(stateId).subscribe(
      (response) => {
        this.cities = response.data;
        this.loading = false;
        if (this.data) {
          const city = {
            id: this.data.cityId,
            name: this.data.city
          };
          const selectedCity = this.cities.find(user => user.id == city.id);

          console.log("selectedState",selectedCity);
          if (selectedCity ) {
            this.createDSM.patchValue({ 
              city: selectedCity ,
              
            }); // Patch the value of the form control
            
          } else {
            console.error("state found in the list");
          }
        }
      },
      (error) => {
        console.log('Something went wrong: ', error);
      }
    );
  }
}
