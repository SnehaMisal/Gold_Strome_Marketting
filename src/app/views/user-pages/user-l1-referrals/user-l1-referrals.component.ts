import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  userId: number;
  mobno: string;
  level: string;
  referralId:number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {userId: 1,referralId:7865, name: 'Eric Shun', mobno: "6256894586", level: 'Level 1'},
  {userId: 2,referralId:1865, name: 'Hans Olo', mobno: "91 2586 253 12", level: 'Level 2'},
  {userId: 3,referralId:1865, name: 'Dan Druff', mobno: "62 5689 458 65", level: 'Level 3'},
];
@Component({
  selector: 'app-user-l1-referrals',
  templateUrl: './user-l1-referrals.component.html',
  styleUrls: ['./user-l1-referrals.component.scss']
})
export class UserL1ReferralsComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'referralId','name', 'mobno', 'level','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor() { }

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

