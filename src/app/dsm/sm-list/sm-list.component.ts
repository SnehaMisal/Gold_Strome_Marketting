import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';


export interface PeriodicElement {
  referralId: string;
  id: number;
  joinDate: string;
  fName:string;
  email:string;
  mobno:string;
  adminType:string;
  adminAccess:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, fName: 'Angelica Ramos',joinDate:'2023-08-25T11:07:44.327Z',email:'demo@gmail.com',mobno:'9999999999',adminType:'CEO', adminAccess: 'SM', referralId: '#tnst18', },
  {id: 2, fName: 'Airi Satou', joinDate:'2023-08-25T11:07:44.327Z',email:'demo@gmail.com',mobno:'9999999999',adminType:'GM', adminAccess: 'SM', referralId: '#tnst348',},
  {id: 3, fName: 'Francis Mitcham	', joinDate:'2023-08-25T11:07:44.327Z	',email:'demo@gmail.com',mobno:'9999999999',adminType:'AGM', adminAccess: 'SA', referralId: '#tnst98' },
  {id: 4, fName: 'Jhon Michle', joinDate:'2023-08-25T11:07:44.327Z',email:'demo@gmail.com',mobno:'9999999998',adminType:'GM', adminAccess: 'SA', referralId: '#tnst18' }
];

@Component({
  selector: 'app-sm-list',
  templateUrl: './sm-list.component.html',
  styleUrls: ['./sm-list.component.scss']
})
export class SmListComponent implements OnInit {

  constructor(private toastr: ToastrService) { }
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
  deleteGM(table: string,id: number){}
  toggleGM(user: any): void {
    user.active = !user.active;
    this.toastr.success('Admin Status is Changed  uccessfully!');
    
  }
}
