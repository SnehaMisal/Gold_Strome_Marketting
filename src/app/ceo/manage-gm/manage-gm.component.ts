import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { AddEditGmComponent } from '../add-edit-gm/add-edit-gm.component';
import { AddEditCeoComponent } from 'src/app/views/add-edit-ceo/add-edit-ceo.component';
import { CeoLoginService } from 'src/app/services/ceo-login.service';
import { DeleteComponent } from '../delete/delete.component';



@Component({
  selector: 'app-manage-gm',
  templateUrl: './manage-gm.component.html',
  styleUrls: ['./manage-gm.component.scss']
})
export class ManageGmComponent implements OnInit {
  GMList:any;
  message: string = '';
  dataSourceLength: any;
  selectedStatus:any;
  selected: any;
  listFilter: any;
  allList: any;
  selectedValue: any;
  constructor(private service: CeoLoginService ,private toastr: ToastrService, private dialog: MatDialog) { }
  displayedColumns: string[] = ['srNo','joinDate', 'fName', 'email', 'mobno','approvalstatus','status','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
    this.getGMList()
  }
  getGMList(){
    this.service.getGMList().subscribe({
      next:(res)=>{
        console.log("res",res);
        this.allList= res.All_GMs
        if(res.error_code === 200){
          this.dataSource = new MatTableDataSource(this.allList.reverse());
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
  addEditGm(){
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
  editGM(data:any){
    const dialogRef = this.dialog.open(AddEditGmComponent, {
      width: '50%',
      data,
    })
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getGMList();
        }
      }
    })
  }
  deleteGM(table: string,id: number){
    const dialogRef= this.dialog.open(DeleteComponent,{
      width: '400px',
      data: { table, id }
    });
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        this.getGMList();
      }
    })
  }
  toggleGM(data: any): void {
     //data.active = !data.active;
    
    data.status = data.status === 'Active' ? 'Inactive' : 'Active';
    this.service.updateGMStatus(data._id).subscribe({
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
