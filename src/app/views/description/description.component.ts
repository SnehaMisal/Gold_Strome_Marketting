import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  productForm:any;
  constructor(private dialogref: MatDialogRef<DescriptionComponent>, @Inject (MAT_DIALOG_DATA) public  data:any) { }

  ngOnInit(): void {
  }
  closeDialog(): void {
    this.dialogref.close();
  }
}
