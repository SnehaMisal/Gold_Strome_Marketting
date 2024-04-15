import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { Dashboard1Component } from './dashboard1/dashboard1.component';
// import { ApexchartComponent } from './plugins/apexchart/apexchart.component';
// import { LoaderComponent } from './plugins/loader/loader.component';
// import { UiColorComponent } from './ui-color/ui-color.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ManageApprovalComponent } from './manage-approval/manage-approval.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ManageLevelComponent } from './manage-level/manage-level.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { BannerComponent } from './banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { ManageCeoComponent } from './manage-ceo/manage-ceo.component';
import { ManageGmComponent } from './manage-gm/manage-gm.component';
import { ManageDsmComponent } from './manage-dsm/manage-dsm.component';
import { ManageSmComponent } from './manage-sm/manage-sm.component';
import { ManageSaComponent } from './manage-sa/manage-sa.component';
import { SmListComponent } from '../dsm/sm-list/sm-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { GmListComponent } from '../ceo/gm-list/gm-list.component';
import { TdsReportComponent } from './tds-report/tds-report.component';
import { SettingComponent } from './setting/setting.component';
import { GstReportComponent } from './gst-report/gst-report.component';
import { DsmUnderSmComponent } from './dsm-under-sm/dsm-under-sm.component';
import { SaUnderSmComponent } from './sa-under-sm/sa-under-sm.component';
import { BillNotificationComponent } from '../ceo/bill-notification/bill-notification.component';
import { SaBillListComponent } from './sa-bill-list/sa-bill-list.component';
// import { LoginComponent } from './auth/default/login/login.component';

const routes: Routes = [
  // Component Routes
  {
    path: 'admin-profile',
    component:AdminProfileComponent,
    data: {routeName: 'admin-profile', pageTitle:'Admin Profile Page', isBanner: false }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {routeName: 'default.dashboard', pageTitle: 'Home', isBanner: true }
   },

   {
    path: 'manage_ceo',
    component: ManageCeoComponent,
    data: {routeName: 'manage_ceo', pageTitle: 'Manage CEO', isBanner: false }
   },
   {
    path: 'manage_gm',
    component: ManageGmComponent,
    data: {routeName: 'manage_gm', pageTitle: 'Manage GM', isBanner: false }
   },
   {
    path: 'manage_dsm',
    component: ManageDsmComponent,
    data: {routeName: 'manage_dsm', pageTitle: 'Manage DSM', isBanner: false }
   },
   {
    path: 'manage_sm',
    component: ManageSmComponent,
    data: {routeName: 'manage_sm', pageTitle: 'Manage SM', isBanner: false }
   },
   {
    path: 'manage_sa',
    component: ManageSaComponent,
    data: {routeName: 'manage_sa', pageTitle: 'Manage SA', isBanner: false }
   },
   {
    path: 'manage_approvals',
    component:ManageApprovalComponent,
    data: {routName:'manage_approvals', pageTitle:'Manage Approvals',isBanner: false }
   },
   {
    path: 'user_management/:id',
    component:UserManagementComponent,
    data: {routName:'user_management', pageTitle:'User Management',isBanner: false }
   },
   {
    path: 'gm_list/:id',
    component:GmListComponent,
    data: {routName:'gm_list', pageTitle:'GM List',isBanner: false }
   },

   {
    path: 'sm_list',
    component:SmListComponent,
    data: {routName:'sm_list', pageTitle:'SM List',isBanner: false }
   },
   {
    path: 'user_list',
    component:UserListComponent,
    data: {routName:'user_list', pageTitle:'User List',isBanner: false }
   },

   {
    path: '',
    component: UserDetailsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../app/views/user-pages/user-pages.module').then(m => m.UserPagesModule),
      }
    ]
  },
  //  {
  //   path:'user_details/:userId',
  //   component: UserDetailsComponent
  //  },
  {
    path:'manage_level',
    component: ManageLevelComponent,
    data: {routeName: 'manage_level', pageTitle:'Manage Level', isBanner: false }
  },

  {
    path:'setting',
    component: SettingComponent,
    data: {routeName: 'setting', pageTitle:'Setting', isBanner: false }
  },

  {
    path:'manage_voucher',
    component: ManageProductsComponent,
    data: {routeName: 'manage_voucher', pageTitle:'Manage Voucher', isBanner: false }
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
    path: 'bill_management',
    component:BillNotificationComponent,
    data:{routeName: 'bill_management', pageTitle:'Bill Managment', isBanner: false}
  },

  {
    path: 'banner',
    component:BannerComponent,
    data:{routeName: 'banner', pageTitle:'banner', isBanner: false}
  },
  {
    path: 'about-us',
    component:AboutUsComponent,
    data:{routeName: 'about-us', pageTitle:'Banner', isBanner: false}
  },
  {
    path: 'privacy-policy',
    component:PrivacyPolicyComponent,
    data:{routeName: 'privacy-policy', pageTitle:'Privacy Policy', isBanner: false}
  },
  {
    path: 'terms_condition',
    component:TermsConditionComponent,
    data:{routeName: 'terms_condition', pageTitle:'Terms and Condition', isBanner: false}
  },

  {
    path: 'dsmList',
    component:DsmUnderSmComponent,
    data: {routName:'dsmList', pageTitle:'DSM List',isBanner: false }
   },
   {
    path: 'saList',
    component:SaUnderSmComponent,
    data: {routName:'sa_list', pageTitle:'SA List',isBanner: false }
   },
   {
    path: 'user_level/:id',
    component:UserManagementComponent,
    data:{routeName: 'user_level', pageTitle:'Level User List', isBanner: false}
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
export class ViewsRoutingModule { }
