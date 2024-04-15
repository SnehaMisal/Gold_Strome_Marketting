import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DsmRoutingModule } from './dsm-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageSmComponent } from './manage-sm/manage-sm.component';
import { SmListComponent } from './sm-list/sm-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { CountUpModule } from 'ngx-countup';
import { AddEditSmComponent } from './add-edit-sm/add-edit-sm.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ManageSmComponent,
    SmListComponent,
    AddEditSmComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    DsmRoutingModule,
    MatTableModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatSlideToggleModule,
        MatPaginatorModule,
        MatButtonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatDialogModule,
        CountUpModule,
  ]
})
export class DsmModule { }
