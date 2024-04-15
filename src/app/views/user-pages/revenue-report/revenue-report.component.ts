import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  userId: number;
  commPer: number;
  commAmount: number;
  paidAmount:number;
  referralId:number;
  totalAmount:number;
  status:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {userId: 1,referralId:7865, name: 'Eric Shun', commPer: 10,paidAmount:1000, commAmount: 100, totalAmount:1500,status:'pending' },
  {userId: 2,referralId:1865, name: 'Hans Olo', commPer: 10,paidAmount:2000, commAmount: 200,totalAmount:1300,status:'cancelled'},
  {userId: 3,referralId:1865, name: 'Dan Druff', commPer: 45,paidAmount:3000, commAmount: 1350, totalAmount:1560,status:'deposited'},
];
@Component({
  selector: 'app-revenue-report',
  templateUrl: './revenue-report.component.html',
  styleUrls: ['./revenue-report.component.scss']
})
export class RevenueReportComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'referralId','name','paidAmount', 'commPer', 'commAmount','totalAmount','status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
