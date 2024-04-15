import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ViewBillComponent } from 'src/app/sa/view-bill/view-bill.component';
import { ConfirmBoxComponent } from '../confirm-box/confirm-box.component';
import { MatSelectChange } from '@angular/material/select';
export interface PeriodicElement {
  referralId: string;
  id: number;
  joinDate: string;
  monthName:string;
  amount:number;
  mobno:string;
  adminType:string;
  createName:string;
  approvalstatus:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, monthName: 'Jully',joinDate:'2023-08-25T11:07:44.327Z',amount:10000,mobno:'9999999999',adminType:'CEO', createName: 'Angelica Ramos', referralId: '#tnst18',approvalstatus:"0" },
  {id: 2, monthName: 'August', joinDate:'2023-08-25T11:07:44.327Z',amount:10000,mobno:'9999999999',adminType:'GM', createName: 'Airi Satou', referralId: '#tnst348',approvalstatus:"1"},
  {id: 3, monthName: 'September', joinDate:'2023-08-25T11:07:44.327Z	',amount:10000,mobno:'9999999999',adminType:'AGM', createName: 'Francis Mitcham', referralId: '#tnst98',approvalstatus:"2" },
  {id: 4, monthName: 'October', joinDate:'2023-08-25T11:07:44.327Z',amount:10000,mobno:'9999999998',adminType:'GM', createName: 'Jhon Michle', referralId: '#tnst18',approvalstatus:'0' }
];

@Component({
  selector: 'app-approv-bill',
  templateUrl: './approv-bill.component.html',
  styleUrls: ['./approv-bill.component.scss']
})
export class ApprovBillComponent implements OnInit {

  constructor(private dialog: MatDialog,) { }
  displayedColumns: string[] = ['srNo','joinDate','createName', 'monthName', 'amount', 'approvalstatus','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
  }
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
  deleteBill(table: string,id: number){}
  
  //element = { approvalstatus: '0' };
  temporaryValue!: string;
  confirmChange(event: MatSelectChange,approvalstatus: string): void {
    const newValue = event.value;
    this.temporaryValue = newValue;
    // Open the confirmation dialog
    const dialogRef = this.dialog.open(ConfirmBoxComponent, {
      width: '300px',
      
      disableClose: true, // Allow clicking outside the dialog to close it
    });
    //const dialogRef = this.dialog.open(ConfirmBoxComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // If the user clicks "Confirm" in the confirmation dialog, update the value
        approvalstatus = newValue;
        console.log("result",result);
        
      }
      else{
        console.log("result else",result);
        
      }
      // If the user clicks "Cancel" or closes the dialog, the value remains unchanged
    });
    console.log("approvalstatus 1",approvalstatus);
  }
}
