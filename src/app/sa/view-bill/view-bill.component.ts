import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
export interface Expense {
  type: string;
  amount: number;
}
@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.scss']
})
export class ViewBillComponent implements OnInit {

  constructor(private dialogref: MatDialogRef<ViewBillComponent>, @Inject (MAT_DIALOG_DATA) public  data:any) { }
  expenses: any;

  ngOnInit(): void {
    console.log("data",this.data);
    this.expenses = this.data.addExpense
    console.log(this.expenses);
    
  }
  closeDialog(): void {
    this.dialogref.close();
  }
}
