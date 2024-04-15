import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.scss']
})
export class TermsConditionComponent implements OnInit {
  termsConditionsForm:any;
  submitted: any;
  config = {
    placeholder: 'Enter text here',
    tabsize: 2,
    height: 300, // Provide the height as a number
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

  termsConditions: any;
  constructor(private formBuilder: FormBuilder,private http: HttpClient, private toastr: ToastrService) {
    this.termsConditionsForm = this.formBuilder.group({
      termsConditions:['', Validators.required],
  })
   }

  ngOnInit(): void {
    this.getTermsConditions()
  }
  getTermsConditions(){
    this.http.get(environment.apiUrl+'getTermsConditions').subscribe((res:any)=>{
      this.termsConditions = res.data.description
      this.termsConditionsForm.patchValue({
        termsConditions : this.termsConditions,
      });
      
    })
  }
  onSubmit(){
    this.submitted = true;
    if (this.termsConditionsForm.invalid) {
      return;
    }
    if (this.submitted) {
    
      var formData: any = new FormData();
      formData.append("description", this.termsConditionsForm.value.termsConditions);
      for (const pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
      }
      this.http.post(environment.apiUrl + 'termsConditions', formData).subscribe(
        (response: any) => {
          console.log("response",response)
          if (response.error_code == 400) {
            this.toastr.error(response.message)
          }
          if (response.error_code == 200) {
             this.toastr.success(response.message)
          }
  
        }
      )
    }
  }
}
