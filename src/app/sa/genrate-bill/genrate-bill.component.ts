import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SaLoginService } from 'src/app/services/sa-login.service';

@Component({
  selector: 'app-genrate-bill',
  templateUrl: './genrate-bill.component.html',
  styleUrls: ['./genrate-bill.component.scss']
})
export class GenrateBillComponent implements OnInit {
  generateBill: any;
  submitted: any;
  constructor(private toastr: ToastrService,private service:SaLoginService,private formBuilder: FormBuilder, private router: Router,private dialogRef: MatDialogRef<GenrateBillComponent>) {
    this.generateMonthYearOptions();
   }

  ngOnInit(): void {
    this.generateBill = this.formBuilder.group({
      expense_month: ['', Validators.required],
      expenses: this.formBuilder.array([]),
    });

    // Add an initial expense field
    this.addExpenseField();
  }
  get expenses(): FormArray {
    return this.generateBill.get('expenses') as FormArray;
  }

  addExpenseField() {
    const expense = this.formBuilder.group({
      expense_type: ['', Validators.required],
      expense_amount: ['', Validators.required],
    });

    this.expenses.push(expense);
  }

  removeExpenseField(index: number) {
    this.expenses.removeAt(index);
  }

  // onSubmit() {
  //   // Handle form submission
  //   console.log(this.generateBill.value);
  // }
  onSubmit(){
    this.submitted = true;
    if (this.generateBill.invalid) {
      return;
    }
    if (this.submitted) {
      // console.log(this.generateBill.value)
      // json
      // const month = this.generateBill.value.expense_month;
      // const transformedData = [
      //   {
      //     month: month,
      //     addExpense: this.generateBill.value.expenses.map((expense: { expense_type: any; expense_amount: any; }) => ({
      //       expenseType: expense.expense_type,
      //       expenseAmount: expense.expense_amount
      //     }))
      //   }
      // ];
      // console.log(transformedData);

      // formdata 
      var formData: any = new FormData();
      formData.append('month', this.generateBill.value.expense_month);
      this.generateBill.value.expenses.forEach((expense: any, index: number) => {
        formData.append(`addExpense[${index}][expenseType]`, expense.expense_type);
        formData.append(`addExpense[${index}][expenseAmount]`, expense.expense_amount.toString());
      });  
      for (const pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
      }
      this.service.createBill(formData).subscribe({
        next:(res:any)=>{
          console.log("res",res);
          
          if(res.error_code == 400){
            this.toastr.success(res.message);
          }
          else if(res.error_code == 200){
            this.toastr.success(res.message);
             this.dialogRef.close(true)
          }
        },
        error:(err:any)=>{
          alert(err);
        }
      })
      // this.router.navigate(['/sa/show_bill']);

    }
  }
  printPage() {
    window.print();
  }
  selectedMonthYear!: string; // Two-way binding variable
  monthYears: string[] = [];
  private generateMonthYearOptions(): void {
    // Replace this with your logic to generate month-year options
    // For example, you can use a loop to generate options for the current and previous months
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // Adding 1 because months are zero-based

    // Generating options for the current and previous months
    for (let i = 0; i < 2; i++) {
      const year = currentMonth - i === 0 ? currentYear - 1 : currentYear;
      const month = currentMonth - i === 0 ? 12 : currentMonth - i;
      const monthYear = `${this.getMonthName(month)} ${year}`;
      this.monthYears.push(monthYear);
    }
  }

  private getMonthName(month: number): string {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[month - 1]; // Subtracting 1 because array is zero-based
  }
}
