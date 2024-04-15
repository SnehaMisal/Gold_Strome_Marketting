import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { SmLoginService } from 'src/app/services/sm-login.service';
import { DeleteComponent } from '../delete/delete.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sa-list',
  templateUrl: './sa-list.component.html',
  styleUrls: ['./sa-list.component.scss']
})
export class SaListComponent implements OnInit {
  SAList:any;
  message: string = '';
  dataSourceLength: any;
  constructor(private dialog: MatDialog, private toastr: ToastrService, private service: SmLoginService) { }
  displayedColumns: string[] = ['srNo','joinDate', 'fName', 'email', 'mobno','status','action'];
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
        if(res.errorCode === 200){
          this.dataSource = new MatTableDataSource(res.data.reverse());
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
      console.log(err);
      // alert(err)
    }
    })
  }
  deleteSA(table:string, id:number){
    const dialogRef= this.dialog.open(DeleteComponent,{
      width: '400px',
      data: { table, id }
    });
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        console.log("val",val);
        
        this.getSAList()
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
}
