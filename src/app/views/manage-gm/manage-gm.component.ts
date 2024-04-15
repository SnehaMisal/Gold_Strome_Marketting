import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { DeleteModelComponent } from '../delete-model/delete-model.component';
import { AddEditGmComponent } from '../add-edit-gm/add-edit-gm.component';
import { AdminListService } from 'src/app/services/admin-list.service';


@Component({
  selector: 'app-manage-gm',
  templateUrl: './manage-gm.component.html',
  styleUrls: ['./manage-gm.component.scss']
})
export class ManageGmComponent implements OnInit {
  GMList: any;
  message: string = '';
  dataSourceLength: any;
  constructor(private service:AdminListService,private dialog: MatDialog,private toastr: ToastrService) { }
  displayedColumns: string[] = ['srNo','joinDate','ceoName', 'fName', 'email', 'mobno','status','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
    this.getGMList();
  }
  addEditGM(){
    const dialogRef = this.dialog.open(AddEditGmComponent, {
      width: '50%'
    })
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getGMList();
        }
      }
    })
  }
  getGMList(){
    this.service.getGMList().subscribe({
      next:(res)=>{
        console.log("res",res);
        if(res.error_code === 200){
          this.dataSource = new MatTableDataSource(res.All_GMs.reverse());
         this.dataSource.sort = this.sort;
         this.dataSource.paginator = this.paginator;
         this.dataSourceLength = this.dataSource.data.length 
          }
        else if(res.error_code === 404){
          this.GMList = []; // Ensure customers array is empty
          this.dataSource = new MatTableDataSource(this.GMList);
          this.dataSource.paginator = this.paginator;
          this.dataSourceLength = this.dataSource.data.length 
        }
        
      },
    error:(err)=>{
      alert(err)
    }
    })
    
  }
  deleteGM(table: string,id: number){
    const dialogRef= this.dialog.open(DeleteModelComponent,{
      width: '400px',
      data: { table, id }
    });
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        this.getGMList();
      }
    })
  }
  editGM(data:any){
 
    const dialogRef= this.dialog.open(AddEditGmComponent,{
      width: '50%',
      data,
    });
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
         this.getGMList();
        }
      }
    })
  }
  toggleGM(data: any): void {
    //data.active = !data.active;
   
   data.status = data.status === 'Active' ? 'Inactive' : 'Active';
   this.service.updateGMtatus(data._id).subscribe({
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
