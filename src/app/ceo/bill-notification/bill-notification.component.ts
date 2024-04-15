import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ViewBillComponent } from 'src/app/sa/view-bill/view-bill.component';
import { ConfirmBoxComponent } from 'src/app/sm/confirm-box/confirm-box.component';
export interface PeriodicElement {
  referralId: string;
  id: number;
  joinDate: string;
  monthName:string;
  amount:number;
  mobno:string;
  post_name:string;
  createName:string;
  approvalstatus:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, monthName: 'Jully',joinDate:'2023-08-25T11:07:44.327Z',amount:10000,mobno:'9999999999',post_name:'CEO', createName: 'Angelica Ramos', referralId: '#tnst18',approvalstatus:"0" },
  {id: 2, monthName: 'August', joinDate:'2023-08-25T11:07:44.327Z',amount:10000,mobno:'9999999999',post_name:'GM', createName: 'Airi Satou', referralId: '#tnst348',approvalstatus:"1"},
  {id: 3, monthName: 'September', joinDate:'2023-08-25T11:07:44.327Z	',amount:10000,mobno:'9999999999',post_name:'AGM', createName: 'Francis Mitcham', referralId: '#tnst98',approvalstatus:"2" },
  {id: 4, monthName: 'October', joinDate:'2023-08-25T11:07:44.327Z',amount:10000,mobno:'9999999998',post_name:'GM', createName: 'Jhon Michle', referralId: '#tnst18',approvalstatus:'0' }
];
@Component({
  selector: 'app-bill-notification',
  templateUrl: './bill-notification.component.html',
  styleUrls: ['./bill-notification.component.scss']
})
export class BillNotificationComponent implements OnInit {
  approvalstatus: any;

  constructor(private dialog: MatDialog) { }
  displayedColumns: string[] = ['srNo','joinDate','createName','approvalDate','approvalBy', 'monthName', 'amount','approvalstatus','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
  }
  downloadBill(data:any){
    console.log("id",data);
    
  }
  deleteBill(table: string,id: number){}
  viewBill(data:any){
    const dialogRef = this.dialog.open(ViewBillComponent, {
      width: '50%',
      data
    })
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
         // this.getDSMList();
        }
      }
    })
  }
  temporaryValue!: string;
  confirmChange(event: MatSelectChange,approvalstatus: string): void {
    
    
    const newValue = event.value;
    this.temporaryValue = newValue;
    console.log("  approvalstatus",approvalstatus);
    console.log("  newValue",newValue);
    console.log(" temporaryValue",this.temporaryValue);
    // Open the confirmation dialog
    const dialogRef = this.dialog.open(ConfirmBoxComponent, {
      width: '300px',
      
      disableClose: true, // Allow clicking outside the dialog to close it
    });
    //const dialogRef = this.dialog.open(ConfirmBoxComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
        // If the user clicks "Confirm" in the confirmation dialog, update the value
        approvalstatus = newValue;
        console.log("result--------",result);
        console.log("approvalstatus--------",approvalstatus);
      }
      else{
        console.log("result else",result);
        
      }
      // If the user clicks "Cancel" or closes the dialog, the value remains unchanged
    });
    //console.log("approvalstatus 1",approvalstatus);
  }
  // confirmbox(data:any){
  //   const dialogRef = this.dialog.open(ConfirmBoxComponent, {
  //     width: '300px',
  //     data,
  //     disableClose: true, // Allow clicking outside the dialog to close it
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       // If the user clicks "Confirm" in the confirmation dialog, update the value
  //       this.approvalstatus = data;
  //       console.log("this.approvalstatus",this.approvalstatus);
        
  //     }
  //     else{
  //       console.log("result else",result);
        
  //     }
  //     // If the user clicks "Cancel" or closes the dialog, the value remains unchanged
  //   });
  // }
}
