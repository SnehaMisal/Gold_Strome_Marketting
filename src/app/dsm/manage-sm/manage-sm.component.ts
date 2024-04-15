import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { AddEditSmComponent } from '../add-edit-sm/add-edit-sm.component';

export interface PeriodicElement {
  referralId: string;
  id: number;
  joinDate: string;
  fName:string;
  email:string;
  mobno:string;
  adminType:string;
  adminAccess:string;
  status:number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, fName: 'Angelica Ramos',joinDate:'2023-08-25T11:07:44.327Z',email:'demo@gmail.com',mobno:'9999999999',adminType:'CEO', adminAccess: 'SA', referralId: '#tnst18',status:0 },
  {id: 2, fName: 'Airi Satou', joinDate:'2023-08-25T11:07:44.327Z',email:'demo@gmail.com',mobno:'9999999999',adminType:'GM', adminAccess: 'SA', referralId: '#tnst348',status:1},
  {id: 3, fName: 'Francis Mitcham	', joinDate:'2023-08-25T11:07:44.327Z	',email:'demo@gmail.com',mobno:'9999999999',adminType:'AGM', adminAccess: 'SA', referralId: '#tnst98',status:2 },
  {id: 4, fName: 'Jhon Michle', joinDate:'2023-08-25T11:07:44.327Z',email:'demo@gmail.com',mobno:'9999999999',adminType:'GM', adminAccess: 'SA', referralId: '#tnst18',status:0 }
];


@Component({
  selector: 'app-manage-sm',
  templateUrl: './manage-sm.component.html',
  styleUrls: ['./manage-sm.component.scss']
})
export class ManageSmComponent implements OnInit {

  constructor(private dialog: MatDialog,private toastr: ToastrService) { }
  displayedColumns: string[] = ['srNo','joinDate', 'fName', 'email', 'mobno','status','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
  }
  addEditDSM(){
    const dialogRef = this.dialog.open(AddEditSmComponent, {
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
  deleteDSM(table: string,id: number){}
  editDSM(data:any){
    const dialogRef = this.dialog.open(AddEditSmComponent, {
      width: '50%',
      data
    })
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
         // this.getDSMList();
        }
      }
    })
  }
  toggleDSM(user: any): void {
    user.active = !user.active;
    this.toastr.success('Admin Status is Changed  uccessfully!');
    
  }
}
