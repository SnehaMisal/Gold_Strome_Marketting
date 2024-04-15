import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TableUtil } from './table';


export interface Element {
  user_name: string,
  pan_no: string,
  total_amount:number,
  total_tds:number,
  week_1: {
    tds: number,
    amount: number,
    date:string
  },
  week_2: {
    tds: number,
    amount: number,
    date:string
  },
  week_3: {
    tds: number,
    amount: number,
    date:string
  },
  week_4: {
    tds: number,
    amount: number,
    date:string
  },
  week_5: {
    tds: number,
    amount: number,
    date:string
  },
}


const ELEMENT_DATA: Element[] = [
  { 
    user_name: 'Angelica Ramos', 
    pan_no: "ABCTY1234D", 
    total_amount:100000,
    total_tds:1000,
    week_1: {date:'06-11-2023 ', amount: 12, tds: 516 }, 
    week_2: {date:'13-08-2023 ', amount: 12, tds: 516 },
    week_3: {date:'20-08-2023 ', amount: 12, tds: 516 }, 
    week_4: {date:'27-08-2023 ', amount: 12, tds: 516 },
    week_5: {date:' ', amount: 0, tds: 0 },
  },
  { 
    user_name: 'Airi Satou', 
    pan_no: "ABCTY1234D", 
    total_amount:20000,
    total_tds:2000,
    week_1: { date:'06-11-2023 ',amount: 51, tds: 831 }, 
    week_2: {date:'13-08-2023 ', amount: 51, tds: 831 }, 
    week_3: {date:'20-08-2023 ', amount: 12, tds: 516 }, 
    week_4: {date:'27-08-2023 ', amount: 12, tds: 516 },
    week_5: {date:' ', amount: 0, tds: 516 },
  },
  { 
    user_name: 'Airi Satou', 
    pan_no: "ABCTY1234D", 
    total_amount:20000,
    total_tds:2000,
    week_1: { date:'06-11-2023 ',amount: 51, tds: 831 }, 
    week_2: {date:'13-08-2023 ', amount: 51, tds: 831 }, 
    week_3: {date:'20-08-2023 ', amount: 12, tds: 516 }, 
    week_4: {date:'27-08-2023 ', amount: 12, tds: 516 },
    week_5: {date:' ', amount: 0, tds: 516 },
  },
  { 
    user_name: 'Airi Satou', 
    pan_no: "ABCTY1234D", 
    total_amount:20000,
    total_tds:2000,
    week_1: { date:'06-11-2023 ',amount: 51, tds: 831 }, 
    week_2: {date:'13-08-2023 ', amount: 51, tds: 831 }, 
    week_3: {date:'20-08-2023 ', amount: 12, tds: 516 }, 
    week_4: {date:'27-08-2023 ', amount: 12, tds: 516 },
    week_5: {date:' ', amount: 0, tds: 516 },
  },
  { 
    user_name: 'Airi Satou', 
    pan_no: "ABCTY1234D", 
    total_amount:20000,
    total_tds:2000,
    week_1: { date:'06-11-2023 ',amount: 51, tds: 831 }, 
    week_2: {date:'13-08-2023 ', amount: 51, tds: 831 }, 
    week_3: {date:'20-08-2023 ', amount: 12, tds: 516 }, 
    week_4: {date:'27-08-2023 ', amount: 12, tds: 516 },
    week_5: {date:' ', amount: 0, tds: 516 },
  },
  { 
    user_name: 'Airi Satou', 
    pan_no: "ABCTY1234D", 
    total_amount:20000,
    total_tds:2000,
    week_1: { date:'06-11-2023 ',amount: 51, tds: 831 }, 
    week_2: {date:'13-08-2023 ', amount: 51, tds: 831 }, 
    week_3: {date:'20-08-2023 ', amount: 12, tds: 516 }, 
    week_4: {date:'27-08-2023 ', amount: 12, tds: 516 },
    week_5: {date:' ', amount: 0, tds: 516 },
  },
  { 
    user_name: 'Airi Satou', 
    pan_no: "ABCTY1234D", 
    total_amount:20000,
    total_tds:2000,
    week_1: { date:'06-11-2023 ',amount: 51, tds: 831 }, 
    week_2: {date:'13-08-2023 ', amount: 51, tds: 831 }, 
    week_3: {date:'20-08-2023 ', amount: 12, tds: 516 }, 
    week_4: {date:'27-08-2023 ', amount: 12, tds: 516 },
    week_5: {date:' ', amount: 0, tds: 516 },
  },
  { 
    user_name: 'Airi Satou', 
    pan_no: "ABCTY1234D", 
    total_amount:20000,
    total_tds:2000,
    week_1: { date:'06-11-2023 ',amount: 51, tds: 831 }, 
    week_2: {date:'13-08-2023 ', amount: 51, tds: 831 }, 
    week_3: {date:'20-08-2023 ', amount: 12, tds: 516 }, 
    week_4: {date:'27-08-2023 ', amount: 12, tds: 516 },
    week_5: {date:' ', amount: 0, tds: 516 },
  },
  { 
    user_name: 'Airi Satou', 
    pan_no: "ABCTY1234D", 
    total_amount:20000,
    total_tds:2000,
    week_1: { date:'06-11-2023 ',amount: 51, tds: 831 }, 
    week_2: {date:'13-08-2023 ', amount: 51, tds: 831 }, 
    week_3: {date:'20-08-2023 ', amount: 12, tds: 516 }, 
    week_4: {date:'27-08-2023 ', amount: 12, tds: 516 },
    week_5: {date:' ', amount: 0, tds: 516 },
  },
  { 
    user_name: 'Airi Satou', 
    pan_no: "ABCTY1234D", 
    total_amount:20000,
    total_tds:2000,
    week_1: { date:'06-11-2023 ',amount: 51, tds: 831 }, 
    week_2: {date:'13-08-2023 ', amount: 51, tds: 831 }, 
    week_3: {date:'20-08-2023 ', amount: 12, tds: 516 }, 
    week_4: {date:'27-08-2023 ', amount: 12, tds: 516 },
    week_5: {date:' ', amount: 0, tds: 516 },
  },
  { 
    user_name: 'Airi Satou', 
    pan_no: "ABCTY1234D", 
    total_amount:20000,
    total_tds:2000,
    week_1: { date:'06-11-2023 ',amount: 51, tds: 831 }, 
    week_2: {date:'13-08-2023 ', amount: 51, tds: 831 }, 
    week_3: {date:'20-08-2023 ', amount: 12, tds: 516 }, 
    week_4: {date:'27-08-2023 ', amount: 12, tds: 516 },
    week_5: {date:' ', amount: 0, tds: 516 },
  },
  { 
    user_name: 'Airi Satou', 
    pan_no: "ABCTY1234D", 
    total_amount:20000,
    total_tds:2000,
    week_1: { date:'06-11-2023 ',amount: 51, tds: 831 }, 
    week_2: {date:'13-08-2023 ', amount: 51, tds: 831 }, 
    week_3: {date:'20-08-2023 ', amount: 12, tds: 516 }, 
    week_4: {date:'27-08-2023 ', amount: 12, tds: 516 },
    week_5: {date:' ', amount: 0, tds: 516 },
  },
  { 
    user_name: 'Airi Satou', 
    pan_no: "ABCTY1234D", 
    total_amount:20000,
    total_tds:2000,
    week_1: { date:'06-11-2023 ',amount: 51, tds: 831 }, 
    week_2: {date:'13-08-2023 ', amount: 51, tds: 831 }, 
    week_3: {date:'20-08-2023 ', amount: 12, tds: 516 }, 
    week_4: {date:'27-08-2023 ', amount: 12, tds: 516 },
    week_5: {date:' ', amount: 0, tds: 516 },
  },
  { 
    user_name: 'Airi Satou', 
    pan_no: "ABCTY1234D", 
    total_amount:20000,
    total_tds:2000,
    week_1: { date:'06-11-2023 ',amount: 51, tds: 831 }, 
    week_2: {date:'13-08-2023 ', amount: 51, tds: 831 }, 
    week_3: {date:'20-08-2023 ', amount: 12, tds: 516 }, 
    week_4: {date:'27-08-2023 ', amount: 12, tds: 516 },
    week_5: {date:' ', amount: 0, tds: 516 },
  }
];

export interface Transaction {
  item: string;
  cost: number;
}
@Component({
  selector: 'app-tds-report',
  templateUrl: './tds-report.component.html',
  styleUrls: ['./tds-report.component.scss']
})
export class TdsReportComponent implements OnInit {
  //firstElement:any
  tbodyHeight = 200; 
  constructor() {
    
   }

  ngOnInit(): void {
    console.log("dataSource",this.dataSource);
    
  }
  dataColumns = ['sr_No','user_name', 'pan_no', 'week_1_amount', 'week_1_tds','week_2_amount', 'week_2_tds','week_3_amount', 'week_3_tds','week_4_amount', 'week_4_tds','week_5_amount', 'week_5_tds','total_amount','total_tds' ]; 
  //dataSource = ELEMENT_DATA;
  //displayedColumns: string[] = ['position','month','no_user',  'amount', 'tds','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  firstWeek: Element | undefined = this.dataSource.data[0];
  secoundWeek: Element | undefined = this.dataSource.data[0];
  thirdWeek: Element | undefined = this.dataSource.data[0];
  fourthWeek: Element | undefined = this.dataSource.data[0];
  fifthWeek: Element | undefined = this.dataSource.data[0];
  reverseDataSource = [...ELEMENT_DATA].reverse();
  
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // exportToExcel(): void {
  //   //this.excelService.exportToExcel(this.dataSource.data, 'User List');
  // }
  monthYears = this.generateMonthYears();
  selectedMonthYear: any;

  private generateMonthYears(): string[] {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth(); // 0-indexed
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const result = [];

    for (let year = currentYear; year >= 2020; year--) {
      for (let month = 11; month >= 0; month--) {
        const monthYear = `${months[month]} ${year}`;
        if (year === currentYear && month > currentMonth) {
          // Skip months in the current year that haven't occurred yet
          continue;
        }
        result.push(monthYear);
      }
    }

    return result;
  }
  onMonthYearSelectionChange(event: any): void {
    console.log('Selected month-year:', this.selectedMonthYear);
    // You can perform any additional actions here based on the selected value
  }
  exportTable() {
    TableUtil.exportTableToExcel("export_Excel",  'TDS Report');
  }
  displayedColumns = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}
