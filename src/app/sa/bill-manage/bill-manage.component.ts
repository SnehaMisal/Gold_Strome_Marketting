import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { GenrateBillComponent } from '../genrate-bill/genrate-bill.component';
import { ViewBillComponent } from '../view-bill/view-bill.component';
import { SaLoginService } from 'src/app/services/sa-login.service';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-bill-manage',
  templateUrl: './bill-manage.component.html',
  styleUrls: ['./bill-manage.component.scss']
})
export class BillManageComponent implements OnInit {
  allList: any;
  message: string = '';
  dataSourceLength: any;
  constructor(private toastr: ToastrService, private dialog: MatDialog, private service:SaLoginService,) { }
  displayedColumns: string[] = ['srNo','joinDate', 'monthName', 'amount', 'approvalstatus','action'];
  dataSource !:  MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
    this.getBillList()
  }
  getBillList(){
    this.service.getBillList().subscribe({
      next:(res)=>{
        console.log("res",res);
        this.allList= res.data
        if(res.error_code === 200){
          this.dataSource = new MatTableDataSource(this.allList.reverse());
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.dataSourceLength = this.dataSource.data.length 
        }
        else if(res.error_code === 404){
          this.allList = []; // Ensure customers array is empty
          this.dataSource = new MatTableDataSource(this.allList);
          this.dataSource.paginator = this.paginator;
          this.dataSourceLength = this.dataSource.data.length 
        }
      },
    error:(err)=>{
      console.log(err);
      // alert(err)
    }
    })
    
  }
  viewBill(data:any){
    const dialogRef = this.dialog.open(ViewBillComponent, {
      width: '50%',
      data,
      backdropClass: 'dialog-backdrop',
      disableClose: true
    })
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
         // this.getDSMList();
        }
      }
    })
  }
  genrateBill(){
    const dialogRef = this.dialog.open(GenrateBillComponent, {
      width: '50%'
    })
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
         // this.getDSMList();
        }
      }
    })
  }

  deleteBill(table:string, id:number){
    const dialogRef= this.dialog.open(DeleteComponent,{
      width: '400px',
      data: { table, id }
    });
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        this.getBillList()
      }
    })
  }
}
