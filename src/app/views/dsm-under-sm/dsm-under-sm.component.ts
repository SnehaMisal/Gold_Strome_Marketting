import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteModelComponent } from '../delete-model/delete-model.component';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  referralId: string;
  id: number;
  joinDate: string;
  fName:string;
  email:string;
  mobno:string;
  adminType:string;
  districtName:string;
  userCount:number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, fName: 'Angelica Ramos',joinDate:'2023-08-25T11:07:44.327Z',email:'demo@gmail.com',mobno:'9999999999',adminType:'CEO', districtName: 'Pune', referralId: '#tnst18',userCount:10 },
  {id: 2, fName: 'Airi Satou', joinDate:'2023-08-25T11:07:44.327Z',email:'demo@gmail.com',mobno:'9999999999',adminType:'GM', districtName: 'Nagpur', referralId: '#tnst348',userCount:30},
  {id: 3, fName: 'Francis Mitcham	', joinDate:'2023-08-25T11:07:44.327Z	',email:'demo@gmail.com',mobno:'9999999999',adminType:'AGM', districtName: 'Nashik', referralId: '#tnst98',userCount:50 },
  {id: 4, fName: 'Jhon Michle', joinDate:'2023-08-25T11:07:44.327Z',email:'demo@gmail.com',mobno:'9999999999',adminType:'GM', districtName: 'Mumbai', referralId: '#tnst18',userCount:70 }
];

@Component({
  selector: 'app-dsm-under-sm',
  templateUrl: './dsm-under-sm.component.html',
  styleUrls: ['./dsm-under-sm.component.scss']
})
export class DsmUnderSmComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
  displayedColumns: string[] = ['srNo','joinDate','fName', 'email', 'mobno','districtName','userCount','status','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
  }
  toggleDSM(data:any){}
  editDSM(data:any){}
  deleteDSM(table: string,id: number){
    const dialogRef= this.dialog.open(DeleteModelComponent,{
      width: '400px',
      //data:{id}
    });
    dialogRef.componentInstance.table = table;
    dialogRef.componentInstance.id = id;
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
        //  this.getAdminList();
        }
      }
    })
  }
}
