import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { AddEditSmComponent } from '../add-edit-sm/add-edit-sm.component';
import { MatDialog } from '@angular/material/dialog';
import { GmLoginService } from 'src/app/services/gm-login.service';
import { DeleteComponent } from '../delete/delete.component';

export interface PeriodicElement {
  referralId: string;
  id: number;
  joinDate: string;
  fName:string;
  email:string;
  mobno:string;
  adminType:string;
  adminAccess:string;
  approvalstatus:Number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, fName: 'Angelica Ramos',joinDate:'2023-08-25T11:07:44.327Z',email:'demo@gmail.com',mobno:'9999999999',adminType:'CEO', adminAccess: 'DSM', referralId: '#tnst18',approvalstatus:0 },
  {id: 2, fName: 'Airi Satou', joinDate:'2023-08-25T11:07:44.327Z',email:'demo@gmail.com',mobno:'9999999999',adminType:'GM', adminAccess: 'SM', referralId: '#tnst348',approvalstatus:1},
  {id: 3, fName: 'Francis Mitcham	', joinDate:'2023-08-25T11:07:44.327Z	',email:'demo@gmail.com',mobno:'9999999999',adminType:'AGM', adminAccess: 'SA', referralId: '#tnst98',approvalstatus:2 },
  {id: 4, fName: 'Jhon Michle', joinDate:'2023-08-25T11:07:44.327Z',email:'demo@gmail.com',mobno:'9999999999',adminType:'GM', adminAccess: 'SA', referralId: '#tnst18',approvalstatus:0 }
];

@Component({
  selector: 'app-manage-sm',
  templateUrl: './manage-sm.component.html',
  styleUrls: ['./manage-sm.component.scss']
})
export class ManageSmComponent implements OnInit {

  SMList:any;
  message: string = '';
  dataSourceLength: any;
  constructor(private dialog: MatDialog, private toastr: ToastrService, private service: GmLoginService) { }
  displayedColumns: string[] = ['srNo','joinDate', 'fName', 'email', 'mobno','approvalstatus','status','action'];
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
  getSMList(){
    this.service.getSMList().subscribe({
      next:(res)=>{
        console.log("res",res);
        if(res.error_code === 200){
          this.dataSource = new MatTableDataSource(res.data.reverse());
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
  // deleteSM(table: string,id: number){}
  deleteSM(table:string, id:number){
    const dialogRef= this.dialog.open(DeleteComponent,{
      width: '400px',
      data: { table, id }
    });
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        console.log("val",val);
        
        this.getSMList()
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
