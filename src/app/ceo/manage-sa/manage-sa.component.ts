import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { AddEditSaComponent } from '../add-edit-sa/add-edit-sa.component';
import { CeoLoginService } from 'src/app/services/ceo-login.service';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-manage-sa',
  templateUrl: './manage-sa.component.html',
  styleUrls: ['./manage-sa.component.scss']
})
export class ManageSaComponent implements OnInit {
  SAList:any;
  message: string = '';
  dataSourceLength: any;
  selectedStatus:any;
  selected: any;
  listFilter: any;
  allList: any;
  selectedValue: any;
  constructor(private service: CeoLoginService,private dialog: MatDialog,private toastr: ToastrService) { }
  // displayedColumns: string[] = ['srNo','joinDate','gmName','agmName','dsmName','smName', 'fName', 'email', 'mobno','status','action'];
  displayedColumns: string[] = ['srNo','joinDate','gmName','smName', 'fName', 'email', 'mobno','approvalstatus','status','action'];

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
        this.allList=res.All_SAs
        if(res.error_code === 200){
          this.dataSource = new MatTableDataSource(res.All_SAs.reverse());
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.dataSourceLength = this.dataSource.data.length 
        }
        else if(res.error_code === 404){
          // this.toastr.success(res.message);
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
  onChangeList(){
    console.log('Selected value:', this.selectedValue);
    if(this.selectedValue == 0){
      this.listFilter = this.allList.filter((list: { ApprovalStatus: string; }) => list.ApprovalStatus === 'Pending');
      this.dataSource = new MatTableDataSource(this.listFilter);
      this.dataSource.paginator = this.paginator;
    }else if(this.selectedValue == 1){
      this.listFilter = this.allList.filter((list: { ApprovalStatus: string; }) => list.ApprovalStatus === 'Accepted');
      this.dataSource = new MatTableDataSource(this.listFilter);
      this.dataSource.paginator = this.paginator;
    }else if(this.selectedValue == 2){
      this.listFilter = this.allList.filter((list: { ApprovalStatus: string; }) => list.ApprovalStatus === 'Rejected');
      this.dataSource = new MatTableDataSource(this.listFilter);
      this.dataSource.paginator = this.paginator;
    }
  }
  addEditSA(){
    const dialogRef = this.dialog.open(AddEditSaComponent, {
      width: '50%'
    })
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getSAList();
        }
      }
    })
  }

  deleteSA(table: string,id: number){
    const dialogRef= this.dialog.open(DeleteComponent,{
      width: '400px',
      data: { table, id }
    });
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        this.getSAList();
      }
    })
  }
  editSA(data:any){
    const dialogRef = this.dialog.open(AddEditSaComponent, {
      width: '50%',
      data
    })
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getSAList();
        }
      }
    })
  }
  toggleSA(data: any): void {
    //data.active = !data.active;
   
   data.status = data.status === 'Active' ? 'Inactive' : 'Active';
   this.service.updateSAStatus(data._id).subscribe({
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
