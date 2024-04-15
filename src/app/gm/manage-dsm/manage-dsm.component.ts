import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { AddEditDsmComponent } from '../add-edit-dsm/add-edit-dsm.component';
import { MatDialog } from '@angular/material/dialog';
import { GmLoginService } from 'src/app/services/gm-login.service';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-manage-dsm',
  templateUrl: './manage-dsm.component.html',
  styleUrls: ['./manage-dsm.component.scss']
})
export class ManageDsmComponent implements OnInit {
  DSMList:any;
  message: string = '';
  dataSourceLength: any;
  constructor(private dialog: MatDialog,private toastr: ToastrService, private service: GmLoginService) { }
  displayedColumns: string[] = ['srNo','joinDate','smName', 'fName', 'email', 'mobno','district','approvalstatus','status','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
    this.getDSMList()
  }
  addEditDSM(){
    const dialogRef = this.dialog.open(AddEditDsmComponent, {
      width: '50%'
    })
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        this.getDSMList();
      }
    })
  }
  getDSMList(){
    this.service.getDSMList().subscribe({
      next:(res)=>{
        console.log("res",res);
        if(res.error_code === 200){
          this.dataSource = new MatTableDataSource(res.dsmRecords.reverse());
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        }
        else if(res.error_code === 404){
          this.DSMList = []; // Ensure customers array is empty
          this.dataSource = new MatTableDataSource(this.DSMList);
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
  deleteDSM(table:string, id:number){
    const dialogRef= this.dialog.open(DeleteComponent,{
      width: '400px',
      data: { table, id }
    });
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        console.log("val",val);
        
        this.getDSMList()
      }
    })
  }
  editDSM(data:any){
    const dialogRef = this.dialog.open(AddEditDsmComponent, {
      width: '50%',
      data
    })
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        this.getDSMList();
      }
    })
  }
  toggleDSM(data: any): void {
    //data.active = !data.active;
   
   data.status = data.status === 'Active' ? 'Inactive' : 'Active';
   this.service.updateDSMStatus(data._id).subscribe({
     next:(res)=>{
       this.toastr.success(res.message);
     },
   error:(err)=>{
     console.log(err);
     // alert(err)
   }
   })
 }
}
