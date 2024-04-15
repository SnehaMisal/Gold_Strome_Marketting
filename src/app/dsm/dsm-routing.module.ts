import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { SmListComponent } from './sm-list/sm-list.component';
import { ManageSmComponent } from './manage-sm/manage-sm.component';
// import { UserListComponent } from '../user-list/user-list.component';
import { DsmUnderSmComponent } from '../views/dsm-under-sm/dsm-under-sm.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
            routeName: 'dashboard',
            pageTitle: 'DSM Dashboard',
            isBanner: true
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
    path: 'dsmList',
    component: DsmUnderSmComponent,
    data: {
        routeName: 'dsmList',
        pageTitle: 'DSM List',
        isBanner: false
    }
},
  {
    path: 'manage_sm',
    component: ManageSmComponent,
    data: {
        routeName: 'manage_sm',
        pageTitle: 'Manage SM',
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
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DsmRoutingModule {}
