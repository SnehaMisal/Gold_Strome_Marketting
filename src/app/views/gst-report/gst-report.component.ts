import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TableUtil } from 'src/app/services/table';
// import { ExcelService } from 'MLM/src/app/services/excel.service';
// import { ExcelService } from 'src/app/services/excel.service';

export interface PeriodicElement {
  gst: number;
  id: number;
  amount: number;
  panNo:string;
  date_time:string;
  userName: string;
  withdraw_amount:number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, gst: 50,userName:'Angelica Ramos', date_time:'2023-11-06T11:07:44.327Z',panNo:'ABCTY1234D ',amount: 1000,withdraw_amount:950 },
  {id: 2, gst: 100,userName:'Airi Satou',date_time:'2023-11-13T11:07:44.327Z', panNo:'ABCTY1235D', amount: 2000,withdraw_amount:1900},
  {id: 3, gst: 175,userName:'	Francis Mitcham	',date_time:'2023-11-20T11:07:44.327Z', panNo:'ABCTY1236D', amount: 3500, withdraw_amount:3325 },
  {id: 4, gst: 426.25,userName:'Jhon Michle',date_time:'2023-11-27T11:07:44.327Z', panNo:'ABCTY1237D', amount: 8525, withdraw_amount:8098.75 },
  // {id: 5, gst: 77,week:'week-5',date_time:'2023-08-25T11:07:44.327Z', no_user:78, amount: 1050, status: '0' ,changeStatus:'Angelica Ramos' },
 
];

@Component({
  selector: 'app-gst-report',
  templateUrl: './gst-report.component.html',
  styleUrls: ['./gst-report.component.scss']
})
export class GstReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position','date_time','userName','panNo',  'amount', 'gst'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // exportToExcel(): void {
  //   this.excelService.exportToExcel(this.dataSource.data, 'weeklyTdsData');
  // }
  exportTable() {
    TableUtil.exportTableToExcel("export_Excel",  'TDS Report');
  }
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
  // exportTable() {
  //   TableUtil.exportTableToExcel("export_Excel");
  // }
}
