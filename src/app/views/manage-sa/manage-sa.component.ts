import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteModelComponent } from '../delete-model/delete-model.component';
import { AdminListService } from 'src/app/services/admin-list.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-manage-sa',
  templateUrl: './manage-sa.component.html',
  styleUrls: ['./manage-sa.component.scss']
})
export class ManageSaComponent implements OnInit {
  SAList:any;
  message: string = '';
  dataSourceLength: any;
  constructor(private dialog: MatDialog,private service:AdminListService,private toastr: ToastrService) { }
  displayedColumns: string[] = ['srNo','joinDate','ceoName','gmName','smName', 'fName', 'email', 'mobno','status','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
    this.getSAList()
  }
  getSAList(){
    this.service.getSAList().subscribe({
      next:(res)=>{
        console.log("res",res);
        if(res.error_code === 200){
          this.SAList = res.data;
          this.dataSource = new MatTableDataSource(this.SAList.reverse());
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.dataSourceLength = this.dataSource.data.length 
          }
        else if(res.error_code === 404){
          this.SAList = []; // Ensure customers array is empty
          this.dataSource = new MatTableDataSource(this.SAList);
          this.dataSource.paginator = this.paginator;
          this.dataSourceLength = this.dataSource.data.length 
        }
        
      },
    error:(err)=>{
      console.log(err)
    }
    })
  }
  toggleSA(data: any): void {
    //data.active = !data.active;
   
   data.status = data.status === 'Active' ? 'Inactive' : 'Active';
   this.service.updateSAstatus(data._id).subscribe({
     next:(res)=>{
       this.toastr.success(res.message);
     },
   error:(err)=>{
     console.log(err);
     // alert(err)
   }
   })
 }
  deleteSA(table: string,id: number){
    const dialogRef= this.dialog.open(DeleteModelComponent,{
      width: '400px',
      data: { table, id }
    });
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        this.getSAList()
      }
    })
  }
}
