// Core Modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SwiperModule } from "swiper/angular";


// Plugin Modules
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from "ng-apexcharts";
import { CountUpModule } from 'ngx-countup';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';

// Modules
import { ViewsRoutingModule } from './views-routing.module';
import { HopeUiModule } from '../components/hope-ui/hope-ui.module';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';

import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ManageApprovalComponent } from './manage-approval/manage-approval.component';
import { DeleteModelComponent } from './delete-model/delete-model.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ManageLevelComponent } from './manage-level/manage-level.component';
import { AddEditLevelComponent } from './add-edit-level/add-edit-level.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { NgxSummernoteModule } from 'ngx-summernote';
import { MatDividerModule} from '@angular/material/divider';
import { DescriptionComponent } from './description/description.component';
import { BannerComponent } from './banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { AddEditBannerComponent } from './add-edit-banner/add-edit-banner.component';
import { ManageCeoComponent } from './manage-ceo/manage-ceo.component';
import { AddEditCeoComponent } from './add-edit-ceo/add-edit-ceo.component';
import { ManageGmComponent } from './manage-gm/manage-gm.component';
import { AddEditGmComponent } from './add-edit-gm/add-edit-gm.component';
import { ManageDsmComponent } from './manage-dsm/manage-dsm.component';
import { ManageSmComponent } from './manage-sm/manage-sm.component';
import { ManageSaComponent } from './manage-sa/manage-sa.component';
import { UserListComponent } from './user-list/user-list.component';
import { SettingComponent } from './setting/setting.component';
import { TdsReportComponent } from './tds-report/tds-report.component';
import { GstReportComponent } from './gst-report/gst-report.component';
import { DsmUnderSmComponent } from './dsm-under-sm/dsm-under-sm.component';
import { SaUnderSmComponent } from './sa-under-sm/sa-under-sm.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { SaBillListComponent } from './sa-bill-list/sa-bill-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TokenInterceptorService } from '../services/token-interceptor.service';

console.warn("admin module")
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
]);

@NgModule({
  declarations: [
    DashboardComponent,
    AdminProfileComponent,
    ManageApprovalComponent,
    DeleteModelComponent,
    UserManagementComponent,
    UserDetailsComponent,
    ManageLevelComponent,
    AddEditLevelComponent,
    ManageProductsComponent,
    AddEditProductComponent,
    DescriptionComponent,
    BannerComponent,
    AboutUsComponent,
    PrivacyPolicyComponent,
    TermsConditionComponent,
    AddEditBannerComponent,
    ManageCeoComponent,
    AddEditCeoComponent,
    ManageGmComponent,
    AddEditGmComponent,
    ManageDsmComponent,
    ManageSmComponent,
    ManageSaComponent,
    UserListComponent,
    TdsReportComponent,
    SettingComponent,
    GstReportComponent,
    DsmUnderSmComponent,
    SaUnderSmComponent,
    BillListComponent,
    SaBillListComponent,
  ],
  imports: [
    CommonModule,
    HopeUiModule,
    NgbModule,
    NgApexchartsModule,
    ViewsRoutingModule,
    FormsModule,
    Ng2FlatpickrModule,
    CountUpModule,
    FullCalendarModule,
    SwiperModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule ,
    NgxSummernoteModule,
    MatDividerModule,
    MatToolbarModule,
  ],
  exports: [
    DashboardComponent,
    HopeUiModule,
    // MatPaginatorModule,
   
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService , multi: true },
  ],
})
export class ViewsModule { }
