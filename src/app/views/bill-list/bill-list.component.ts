import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  referralId: string;
  id: number;
  joinDate: string;
  monthName:string;
  amount:number;
  mobno:string;
  adminType:string;
  createName:string;
  approvalstatus:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, monthName: 'Jully - 2023',joinDate:'2023-08-25T11:07:44.327Z',amount:10000,mobno:'9999999999',adminType:'CEO', createName: 'Angelica Ramos', referralId: '#tnst18',approvalstatus:"0" },
  {id: 2, monthName: 'August - 2023', joinDate:'2023-08-25T11:07:44.327Z',amount:10000,mobno:'9999999999',adminType:'GM', createName: 'Airi Satou', referralId: '#tnst348',approvalstatus:"1"},
  {id: 3, monthName: 'September - 2023', joinDate:'2023-08-25T11:07:44.327Z	',amount:10000,mobno:'9999999999',adminType:'AGM', createName: 'Francis Mitcham', referralId: '#tnst98',approvalstatus:"2" },
  {id: 4, monthName: 'October - 2023', joinDate:'2023-08-25T11:07:44.327Z',amount:10000,mobno:'9999999998',adminType:'GM', createName: 'Jhon Michle', referralId: '#tnst18',approvalstatus:'0' }
];
@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.scss']
})
export class BillListComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['srNo', 'monthName', 'revenueAmount','expencesAmount','netAmount','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
  }
  viewBill(id:any){

  }
}
