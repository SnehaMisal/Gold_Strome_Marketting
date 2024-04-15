import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmRoutingModule } from './sm-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { DsmListComponent } from './dsm-list/dsm-list.component';
import { SaListComponent } from './sa-list/sa-list.component';
import { ApprovBillComponent } from './approv-bill/approv-bill.component';
import { ConfirmBoxComponent } from './confirm-box/confirm-box.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DsmListComponent,
    SaListComponent,
    ApprovBillComponent,
    ConfirmBoxComponent,
    DeleteComponent,
  ],
  imports: [
    CommonModule,
    SmRoutingModule,
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
export class SmModule { }
