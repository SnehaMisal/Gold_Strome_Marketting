import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {ManageDsmComponent} from './manage-dsm/manage-dsm.component';
import {ManageSmComponent} from './manage-sm/manage-sm.component';
import { ManageSaComponent } from './manage-sa/manage-sa.component';
import { ManageGmComponent } from './manage-gm/manage-gm.component';
import { GmListComponent } from './gm-list/gm-list.component';
import { ManageApprovalComponent } from './manage-approval/manage-approval.component';
import { SmListComponent } from '../dsm/sm-list/sm-list.component';
import { UserManagementComponent } from '../views/user-management/user-management.component';
import { UserListComponent } from '../views/user-list/user-list.component';
import { DsmUnderSmComponent } from '../views/dsm-under-sm/dsm-under-sm.component';
import { BillManageComponent } from '../sa/bill-manage/bill-manage.component';
import { BillNotificationComponent } from './bill-notification/bill-notification.component';
import { BillListComponent } from '../views/bill-list/bill-list.component';
import { GstReportComponent } from '../views/gst-report/gst-report.component';
import { TdsReportComponent } from '../views/tds-report/tds-report.component';
import { ManageLevelComponent } from '../views/manage-level/manage-level.component';
import { ManageProductsComponent } from '../views/manage-products/manage-products.component';
import { SaBillListComponent } from '../views/sa-bill-list/sa-bill-list.component';

const routes: Routes = [
   {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
            routeName: 'dashboard',
            pageTitle: 'CEO Dashboard',
            isBanner: true
        }
    },
    {
        path: 'user_management/:id',
        component: UserManagementComponent,
        data: {
            routeName: 'user_management',
            pageTitle: 'User Management',
            isBanner: false
        }
    },
    {
        path: 'user_level/:id',
        component:UserManagementComponent,
        data:{routeName: 'user_level', pageTitle:'Level User List', isBanner: false}
      },
    {
        path: 'manage_approval',
        component: ManageApprovalComponent,
        data: {
            routeName: 'manage_approval',
            pageTitle: 'Manage Approval',
            isBanner: false
        }
    },
    {
        path: 'gm_list',
        component: GmListComponent,
        data: {
            routeName: 'gm_list',
            pageTitle: 'GM List',
            isBanner: false
        }
    },

    {
        path: 'sm_list',
        component: SmListComponent,
        data: {
            routeName: 'sm_list',
            pageTitle: 'SM List',
            isBanner: false
        }
    },
    {
        path: 'manage_gm',
        component: ManageGmComponent,
        data: {
            routeName: 'manage_gm',
            pageTitle: 'Manage GM',
            isBanner: false
        }
    },  

    {
        path: 'manage_dsm',
        component: ManageDsmComponent,
        data: {
            routeName: 'manage_dsm',
            pageTitle: 'Manage DSM',
            isBanner: false
        }
    }, {
        path: 'manage_sm',
        component: ManageSmComponent,
        data: {
            routeName: 'manage_sm',
            pageTitle: 'Manage SM',
            isBanner: false
        }
    },
    {
      path: 'manage_sa',
      component: ManageSaComponent,
      data: {
          routeName: 'manage_sa',
          pageTitle: 'Manage SA',
          isBanner: false
      }
  },
{
    path: 'user_list',
    component: UserListComponent,
    data: {
        routeName: 'user_list',
        pageTitle: 'User List',
        isBanner: false
    }
},

{
    path: 'bill_management',
    component: BillNotificationComponent,
    data: {
        routeName: 'bill_management',
        pageTitle: 'Bill Management ',
        isBanner: false
    }
},
{
    path: 'bill_list',
    component: BillListComponent,
    data: {
        routeName: 'bill_list',
        pageTitle: 'Bill Management ',
        isBanner: false
    }
},
{
    path: 'dsmList',
    component:DsmUnderSmComponent,
    data: {routName:'dsmList', pageTitle:'DSM List',isBanner: false }
   },
   {
    path: 'gst_report',
    component:GstReportComponent,
    data:{routeName: 'gst_report', pageTitle:'GST Report', isBanner: false}
  },
  {
    path: 'tds_report',
    component:TdsReportComponent,
    data:{routeName: 'tds_report', pageTitle:'TDS Report', isBanner: false}
  },
  {
    path:'manage_level',
    component: ManageLevelComponent,
    data: {routeName: 'manage_level', pageTitle:'Manage Level', isBanner: false }
  },
  {
    path:'manage_voucher',
    component: ManageProductsComponent,
    data: {routeName: 'manage_voucher', pageTitle:'Manage Voucher', isBanner: false }
  },
  {
    path:'sa_bill_list',
    component: SaBillListComponent,
    data: {routeName: 'sa_bill_list', pageTitle:'Bill List', isBanner: false }
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CeoRoutingModule {}
