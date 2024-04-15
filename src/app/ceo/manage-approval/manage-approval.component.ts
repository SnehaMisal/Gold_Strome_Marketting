import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  fName: string;
  id: number;
  email: string;
  adminType: string;
  mobno:string;
  adminAccess:string;
  requestDate: string,
  requestStatus:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, fName: 'Angelica Ramos',requestDate:'2023-08-25T11:07:44.327Z', adminAccess:'DSM, SM',mobno:'9999999999', email: 'demo@gmail.com', adminType: 'DSM',requestStatus:'0' },
  {id: 2, fName: 'Airi Satou',requestDate:'2023-08-25T11:07:44.327Z',adminAccess:'SM', mobno:'9999999999', email: 'demo@gmail.com', adminType: 'SM',requestStatus:'0'},
  {id: 3, fName: 'Francis Mitcham	',requestDate:'2023-08-25T11:07:44.327Z',adminAccess:'DSM', mobno:'9999999999', email: 'demo@gmail.com', adminType: 'DSM',requestStatus:'0' },
  {id: 4, fName: 'Jhon Michle',requestDate:'2023-08-25T11:07:44.327Z',adminAccess:'DSM', mobno:'9999999999', email: 'demo@gmail.com', adminType: 'SM', requestStatus:'0'},
  {id: 5, fName: 'Wesley Burland',requestDate:'2023-08-25T11:07:44.327Z',adminAccess:'DSM', mobno:'9999999999', email: 'demo@gmail.com', adminType: 'SM' ,requestStatus:'0' },
  {id: 6, fName: 'Stu Delamaine',requestDate:'2023-08-25T11:07:44.327Z',adminAccess:'SM , SA', mobno:'9999999999', email: 'demo@gmail.com', adminType: 'DSM',requestStatus:'0'},
  {id: 7, fName: 'Kare Skitterel',requestDate:'2023-08-25T11:07:44.327Z',adminAccess:'SA', mobno:'9999999999', email: 'demo@gmail.com', adminType: 'SM',requestStatus:'0'},
  {id: 8, fName: 'Travus Bruntjen',requestDate:'2023-08-25T11:07:44.327Z',adminAccess:'DSM', mobno:'9999999999', email: 'demo@gmail.com', adminType: 'SA',requestStatus:'0'},
  {id: 9, fName: 'Saunder Offner',requestDate:'2023-08-25T11:07:44.327Z',adminAccess:'DSM', mobno:'9999999999', email: 'demo@gmail.com', adminType: 'DSM',requestStatus:'0'},
  {id: 10, fName: 'Jameson Lyster',requestDate:'2023-08-25T11:07:44.327Z',adminAccess:'SA , DSM', mobno:'9999999999', email: 'demo@gmail.com', adminType: 'SM',requestStatus:'0'},
];

@Component({
  selector: 'app-manage-approval',
  templateUrl: './manage-approval.component.html',
  styleUrls: ['./manage-approval.component.scss']
})
export class ManageApprovalComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['id','requestDate','createdBy', 'fName', 'email', 'mobno','adminType','requestStatus','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
  }
  deleteRevenue(table:string, id:number){
    console.log("id",id)
    // const dialogRef= this.dialog.open(DeleteModelComponent,{
    //   width: '400px',
    //  // data:{data}
    // });
    // dialogRef.componentInstance.table = table;
    // dialogRef.componentInstance.id = id;
    // dialogRef.afterClosed().subscribe({
    //   next:(val)=>{
    //     if(val){
    //       console.log("val",val)
    //       // this.getProductList();
    //     }
    //   }
    // })
  }
}
