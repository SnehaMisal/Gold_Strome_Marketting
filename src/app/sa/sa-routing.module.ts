import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GstReportComponent } from '../views/gst-report/gst-report.component';
import { TdsReportComponent } from '../views/tds-report/tds-report.component';
import { BillManageComponent } from './bill-manage/bill-manage.component';
import { GenrateBillComponent } from './genrate-bill/genrate-bill.component';
import { ShowBillComponent } from './show-bill/show-bill.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
        routeName: 'dashboard',
        pageTitle: 'SM Dashboard',
        isBanner: true
    }
  },
  {
    path: 'bill_management',
    component: BillManageComponent,
    data: {
        routeName: 'bill_management',
        pageTitle: 'Bill Management',
        isBanner: false
    },
  },
  {
    path: 'generate_bill',
    component: GenrateBillComponent,
    data: {
        routeName: 'generate_bill',
        pageTitle: 'Generate Bill',
        isBanner: false
    },
  },
  {
    path: 'show_bill',
    component: ShowBillComponent,
    data: {
        routeName: 'show_bill',
        pageTitle: 'Show Bill',
        isBanner: false
    },
  },
  {
    path: 'gst_report',
    component: GstReportComponent,
    data: {
        routeName: 'gst_report',
        pageTitle: 'GST Report',
        isBanner: false
    },
  },
  {
    path: 'tds_report',
    component:TdsReportComponent,
    data:{routeName: 'tds_report', pageTitle:'TDS Report', isBanner: false}
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaRoutingModule { }
