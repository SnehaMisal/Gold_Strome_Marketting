import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from '../views/user-management/user-management.component';
import { DsmListComponent } from './dsm-list/dsm-list.component';
import { SaListComponent } from './sa-list/sa-list.component';
import { ApprovBillComponent } from './approv-bill/approv-bill.component';
import { SaBillListComponent } from '../views/sa-bill-list/sa-bill-list.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
        routeName: 'dashboard',
        pageTitle: 'SM Dashboard',
        isBanner: true
    },
  },
  {
    path: 'dsm_list',
    component: DsmListComponent,
    data: {
        routeName: 'dsm_list',
        pageTitle: 'DSM List',
        isBanner: false
    },
  },
  {
    path: 'sa_list',
    component: SaListComponent,
    data: {
        routeName: 'sa_list',
        pageTitle: 'SA List',
        isBanner: false
    },
  },
  {
    path: 'user_management',
    component: UserManagementComponent,
    data: {
        routeName: 'user_management',
        pageTitle: 'User Management',
        isBanner: false
    },
  },
  {
    path: 'bill_management',
    component: ApprovBillComponent,
    data: {
        routeName: 'bill_management',
        pageTitle: 'Bill  Management',
        isBanner: false
    },
  },
  {
    path: 'sa_bill_list',
    component:SaBillListComponent,
    data: {routName:'sa_bill_list', pageTitle:'SA Bill List',isBanner: false }
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmRoutingModule { }
