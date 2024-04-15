import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { AdminListService } from 'src/app/services/admin-list.service';
import { DeleteModelComponent } from '../delete-model/delete-model.component';
import { AddEditCeoComponent } from '../add-edit-ceo/add-edit-ceo.component';
import { ConfirmBoxComponent } from 'src/app/sm/confirm-box/confirm-box.component';

@Component({
  selector: 'app-manage-ceo',
  templateUrl: './manage-ceo.component.html',
  styleUrls: ['./manage-ceo.component.scss']
})
export class ManageCeoComponent implements OnInit {
  getCeoList: any;
  CEOList:any;
  message: string = '';
  dataSourceLength: any;
  constructor(private dialog: MatDialog, private service:AdminListService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCEOList()
  }

  displayedColumns: string[] = ['srNo','joinDate', 'fName', 'email', 'mobno','status','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addEditCEO(){
    const dialogRef = this.dialog.open(AddEditCeoComponent, {
      width: '50%'
    })

    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getCEOList();
        }
      }
    })
  }
  getCEOList(){
    this.service.getAdminList().subscribe({
      next:(res)=>{
        console.log("res",res);
        if(res.error_code === 200){
          this.getCeoList = res.All_CEOs;
          this.dataSource = new MatTableDataSource(this.getCeoList.reverse());
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.dataSourceLength = this.dataSource.data.length
          }
        else if(res.error_code === 404){
          this.getCeoList = []; // Ensure customers array is empty
          this.dataSource = new MatTableDataSource(this.getCeoList);
          this.dataSource.paginator = this.paginator;
          this.dataSourceLength = this.dataSource.data.length 
        }
        
      },
    error:(err)=>{
      console.log(err)
    }
    })
  }
  deleteCEO(table:string, id:number){
    const dialogRef= this.dialog.open(DeleteModelComponent,{
      width: '400px',
      data: { table, id }
    });
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        console.log("val",val);
        this.getCEOList()
      }
    })
  }
  editCEO(data:any){
    const dialogRef= this.dialog.open(AddEditCeoComponent,{
      width: '50%',
      data,
    });
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getCEOList();
        }
      }
    })
  }
  toggleCEO(data: any): void {
    //data.active = !data.active;
   
   data.status = data.status === 'Active' ? 'Inactive' : 'Active';
   this.service.updateCEOtatus(data._id).subscribe({
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
