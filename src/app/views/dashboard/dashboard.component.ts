import { Component, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels, ApexPlotOptions, ApexResponsive, ApexXAxis, ApexLegend, ApexFill } from "ng-apexcharts";
import { FlatpickrOptions } from 'ng2-flatpickr/ng2-flatpickr';
import { getVariableColor } from '../../utilities/root-var'
import { SwiperComponent } from "swiper/angular";
// import Swiper core and required modules
import SwiperCore, { SwiperOptions, Navigation, Virtual } from 'swiper';
import { AdminListService } from 'src/app/services/admin-list.service';
SwiperCore.use([Navigation, Virtual])

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DashboardComponent implements AfterViewInit {
  totalCEO: any;
  totalGM: any;
  totalSM: any;
  totalDSM: any;
  totalSA: any;
  totalEmployees: any;
  constructor(private service:AdminListService,) {
  }
  ngAfterViewInit(): void {
    this.getAdminDashbaord()
  }
  getAdminDashbaord(){
    this.service.getAdminDashbaord().subscribe({
      next:(res)=>{
        console.log("res",res);
        this.totalCEO= res.CEO
        this.totalGM= res.GM
        this.totalSM= res.SM
        this.totalDSM= res.DSM
        this.totalSA= res.SA
        this.totalEmployees= res.totalEmployees
      },
    error:(err)=>{
      alert(err)
    }
    })
  }
}
