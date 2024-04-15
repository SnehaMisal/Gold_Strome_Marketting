import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { AddEditDsmComponent } from '../add-edit-dsm/add-edit-dsm.component';
import { AddEditSmComponent } from '../add-edit-sm/add-edit-sm.component';
import { CeoLoginService } from 'src/app/services/ceo-login.service';
import { DeleteComponent } from '../delete/delete.component';



@Component({
  selector: 'app-manage-sm',
  templateUrl: './manage-sm.component.html',
  styleUrls: ['./manage-sm.component.scss']
})
export class ManageSmComponent implements OnInit {
  SMList:any;
  message: string = '';
  dataSourceLength: any;
  selectedValue:any;
  listFilter: any;
  allList: any;
selected: any;
  constructor(private service: CeoLoginService,private dialog: MatDialog,private toastr: ToastrService) { }
  displayedColumns: string[] = ['srNo','joinDate','gmName', 'fName', 'email', 'mobno','approvalstatus','status','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
    this.getSMList()
  }
  addEditSM(){
    const dialogRef = this.dialog.open(AddEditSmComponent, {
      width: '50%'
    })
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getSMList();
        }
      }
    })
  }
  getSMList(){
    this.service.getSMList().subscribe({
      next:(res)=>{
        console.log("res",res);
        this.allList=res.All_SMs
        if(res.error_code === 200){

          this.dataSource = new MatTableDataSource(this.allList.reverse());
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.dataSourceLength = this.dataSource.data.length 
        }
        else if(res.error_code === 404){
          this.SMList = []; // Ensure customers array is empty
          this.dataSource = new MatTableDataSource(this.SMList);
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
  deleteSM(table: string,id: number){
    const dialogRef= this.dialog.open(DeleteComponent,{
      width: '400px',
      data: { table, id }
    });
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        this.getSMList();
      }
    })
  }
  editSM(data:any){
    const dialogRef = this.dialog.open(AddEditSmComponent, {
      width: '50%',
      data
    })
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getSMList();
        }
      }
    })
  }

  toggleSM(data: any): void {
    //data.active = !data.active;
   
   data.status = data.status === 'Active' ? 'Inactive' : 'Active';
   this.service.updateSMStatus(data._id).subscribe({
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
