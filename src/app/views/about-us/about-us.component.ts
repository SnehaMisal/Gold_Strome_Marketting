import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  aboutUsForm:any;
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
  aboutUs: any;
  aboutUsTemp: any;
  constructor(private formBuilder: FormBuilder,private http: HttpClient,private toastr: ToastrService) {
    this.aboutUsForm = this.formBuilder.group({
      about:['', Validators.required],
    })
   }

  ngOnInit(): void {
    this.getAboutUs()
  }
  getAboutUs(){
    this.http.get(environment.apiUrl+'getAboutUs').subscribe((res:any)=>{
      this.aboutUsTemp = res
      this.aboutUs= this.aboutUsTemp.data[0].description
      this.aboutUsForm.patchValue({
        about : this.aboutUs,
        
      });
    })
  }
  onSubmit(){
    this.submitted = true;
    if (this.aboutUsForm.invalid) {
      return;
    }
    if (this.submitted) {
      var formData: any = new FormData();
      formData.append("description", this.aboutUsForm.value.about);
      // for (const pair of formData.entries()) {
      //   console.log(`${pair[0]}, ${pair[1]}`);
      // }
      this.http.put(environment.apiUrl + 'createUpdateAboutUs', formData).subscribe(
        (response: any) => {
          // console.log("response",response)
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
