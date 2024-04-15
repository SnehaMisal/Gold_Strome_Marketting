import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CeoRoutingModule } from './ceo-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteComponent } from './delete/delete.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountUpModule } from 'ngx-countup';
import { ManageDsmComponent } from './manage-dsm/manage-dsm.component';
import { ManageSmComponent } from './manage-sm/manage-sm.component';
import { ManageSaComponent } from './manage-sa/manage-sa.component';
import { AddEditDsmComponent } from './add-edit-dsm/add-edit-dsm.component';
import { AddEditSmComponent } from './add-edit-sm/add-edit-sm.component';
import { AddEditSaComponent } from './add-edit-sa/add-edit-sa.component';
import { ManageGmComponent } from './manage-gm/manage-gm.component';
import { GmListComponent } from './gm-list/gm-list.component';
import { AddEditGmComponent } from './add-edit-gm/add-edit-gm.component';
import { ManageApprovalComponent } from './manage-approval/manage-approval.component';
import { BillNotificationComponent } from './bill-notification/bill-notification.component';
import {MatMenuModule} from '@angular/material/menu';
console.warn("ceo module")
@NgModule({
  declarations: [

    DeleteComponent,
    DashboardComponent,
    ManageDsmComponent,
    ManageSmComponent,
    ManageSaComponent,
    AddEditDsmComponent,
    AddEditSmComponent,
    AddEditSaComponent,
    ManageGmComponent,
    GmListComponent,
    AddEditGmComponent,
    ManageApprovalComponent,
    BillNotificationComponent
  ],
  imports: [
    CommonModule,
    CeoRoutingModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSlideToggleModule ,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    CountUpModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CeoModule { }
