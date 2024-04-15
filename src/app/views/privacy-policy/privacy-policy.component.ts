import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  privacyPolicyForm:any;
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
  privacyPolicy: any;
  constructor(private formBuilder: FormBuilder,private http: HttpClient,private toastr: ToastrService) { 
    this.privacyPolicyForm = this.formBuilder.group({
      privacyPolicy:['', Validators.required],
  })
}

  ngOnInit(): void {
    this.getPrivacyPolicy()
  }
  getPrivacyPolicy(){
    this.http.get(environment.apiUrl+'getPrivecyPolicy').subscribe((res:any)=>{
      console.log("res",res);
      
      this.privacyPolicy = res.data.description
      this.privacyPolicyForm.patchValue({
        privacyPolicy : this.privacyPolicy,
        
      });
    })
  }
  onSubmit(){
    this.submitted = true;
    if (this.privacyPolicyForm.invalid) {
      return;
    }
    if (this.submitted) {
      var formData: any = new FormData();
      formData.append("description", this.privacyPolicyForm.value.privacyPolicy);
      for (const pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
      }
      this.http.post(environment.apiUrl + 'privecyPolicy', formData).subscribe(
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
