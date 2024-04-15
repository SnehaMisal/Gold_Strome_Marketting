import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LevelService } from 'src/app/services/level.service';

@Component({
  selector: 'app-add-edit-level',
  templateUrl: './add-edit-level.component.html',
  styleUrls: ['./add-edit-level.component.scss']
})
export class AddEditLevelComponent implements OnInit {
  levelForm:any;
  submitted: any;
  constructor(private formBuilder: FormBuilder, private service: LevelService, private toastr: ToastrService, private dialogref: MatDialogRef<AddEditLevelComponent>,@Inject (MAT_DIALOG_DATA) public  data:any,) { 
    this.levelForm = this.formBuilder.group({
      levelName:['', Validators.required],
      minUser:['', Validators.required],
      l1Commission:[''],
      l2Commission:[''],
      downlineRefComm:['']
    })
  }

  ngOnInit(): void {
    this.levelForm.patchValue(this.data)
  }
  onSubmit(){
    this.submitted = true;
    if (this.levelForm.invalid) {
      return;
    }
    if (this.submitted) {
      const formData = { ...this.levelForm.value };
      if(this.data){
        this.service.updateLevel(this.data.id,formData).subscribe({
          next:(val:any)=>{
              
            this.toastr.success('Level Updated  Successfully!');
            this.dialogref.close(true)
          },
          error:(err:any)=>{
            alert(err);
          }
        })
      }else{
        this.service.createLevel(formData).subscribe({
          next:(val:any)=>{
              
            this.toastr.success('Level Created  Successfully!');
            this.dialogref.close(true)
          },
          error:(err:any)=>{
            alert(err);
          }
        })
      }
      
    }
  }
}
