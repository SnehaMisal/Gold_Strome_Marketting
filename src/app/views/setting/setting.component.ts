import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  tdsForm:any;
  payoutForm:any
  submitted: any;
  hide = true;
  constructor(private formBuilder: FormBuilder) {
    this.tdsForm = this.formBuilder.group({
      tds:['', [Validators.required, Validators.min(0), Validators.max(100)]],
    })
    this.payoutForm = this.formBuilder.group({
      payoutDay:['', Validators.required],
    })
   }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted = true;
    if (this.tdsForm.invalid) {
      return;
    }
    if (this.submitted) {
    
       const formData = { ...this.tdsForm.value };
      console.log(formData)
    }
  }
  onSubmitPayout(){
    this.submitted = true;
    if (this.payoutForm.invalid) {
      return;
    }
    if (this.submitted) {
    
       const formData = { ...this.payoutForm.value };
      console.log(formData)
    }
  }
  get amountControl() {
    return this.tdsForm.get('tds');
  }
  handleInputChange(event: any): void {
    let inputValue = event.target.value;
    if (inputValue < 0) {
      inputValue = 0;
    } else if (inputValue > 100) {
      inputValue = 100;
    }

    this.amountControl.setValue(inputValue);
  }
}
