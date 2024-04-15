import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'hui-card-chart',
  templateUrl: './card-chart.component.html',
  styles: [
  ]
})
export class CardChartComponent implements AfterViewInit {

  chartShow: boolean = false
  loader: boolean = true
  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.chartShow = true
    }, 2000)
  }

}
