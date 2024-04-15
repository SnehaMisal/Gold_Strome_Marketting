import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  referralId: string;
  id: number;
  joinDate: string;
  fName:string;
  email:string;
  mobno:string;
  level:string;
  totalIncome:number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, fName: 'Angelica Ramos',joinDate:'2023-08-25T11:07:44.327Z',email:'demo@gmail.com',mobno:'9999999999',level:'Level 1', totalIncome: 1050, referralId: '#tnst18', },
  {id: 2, fName: 'Airi Satou', joinDate:'2023-08-25T11:07:44.327Z',email:'demo@gmail.com',mobno:'9999999999',level:'Level 1', totalIncome: 1050, referralId: '#tnst348',},
  {id: 3, fName: 'Francis Mitcham	', joinDate:'2023-08-25T11:07:44.327Z	',email:'demo@gmail.com',mobno:'9999999999',level:'Level 1', totalIncome: 1050, referralId: '#tnst98' },
  {id: 4, fName: 'Jhon Michle', joinDate:'2023-08-25T11:07:44.327Z',email:'demo@gmail.com',mobno:'9999999999',level:'Level 1', totalIncome: 1050, referralId: '#tnst18' }
];
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['srNo','referralId','joinDate', 'fName', 'email', 'mobno','level'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor() { }

  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log('Filter Value:', filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
