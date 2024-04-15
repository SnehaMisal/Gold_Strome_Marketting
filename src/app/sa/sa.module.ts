import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaRoutingModule } from './sa-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountUpModule } from 'ngx-countup';
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
import { BillManageComponent } from './bill-manage/bill-manage.component';
import { MatTableModule } from '@angular/material/table';
import { GenrateBillComponent } from './genrate-bill/genrate-bill.component';
import { ShowBillComponent } from './show-bill/show-bill.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BillManageComponent,
    GenrateBillComponent,
    ShowBillComponent,
    ViewBillComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    SaRoutingModule,
    CountUpModule,
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
        MatTableModule,
        
  ]
})
export class SaModule { }
