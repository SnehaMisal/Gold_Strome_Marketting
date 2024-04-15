import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  tds: number;
  id: number;
  amount: number;
  wallet_amount:number;
  panNo:string;
  date_time:string;
  userName: string;
  withdraw_amount:number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, tds: 50,userName:'Angelica Ramos', date_time:'2023-11-06T11:07:44.327Z',panNo:'ABCTY1234D ',amount: 1000,withdraw_amount:950,wallet_amount:7000 },
  {id: 2, tds: 100,userName:'Airi Satou',date_time:'2023-11-13T11:07:44.327Z', panNo:'ABCTY1235D', amount: 2000,withdraw_amount:1900, wallet_amount:8000},
  {id: 3, tds: 175,userName:'	Francis Mitcham	',date_time:'2023-11-20T11:07:44.327Z', panNo:'ABCTY1236D', amount: 3500, withdraw_amount:3325, wallet_amount: 654 },
  {id: 4, tds: 426.25,userName:'Jhon Michle',date_time:'2023-11-27T11:07:44.327Z', panNo:'ABCTY1237D', amount: 8525, withdraw_amount:8098.75,wallet_amount:2555 },
  // {id: 5, tds: 77,week:'week-5',date_time:'2023-08-25T11:07:44.327Z', no_user:78, amount: 1050, status: '0' ,changeStatus:'Angelica Ramos' },
 
];


@Component({
  selector: 'app-payout-request',
  templateUrl: './payout-request.component.html',
  styleUrls: ['./payout-request.component.scss']
})
export class PayoutRequestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position','date_time',  'amount', 'tds','withdraw_amount','wallet_amount'];  
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
