import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GmRoutingModule} from './gm-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ManageDsmComponent} from './manage-dsm/manage-dsm.component';
import {ManageSmComponent} from './manage-sm/manage-sm.component';
import {ManageSaComponent} from './manage-sa/manage-sa.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {CountUpModule} from 'ngx-countup';
import {AddEditDsmComponent} from './add-edit-dsm/add-edit-dsm.component';
import {AddEditSmComponent} from './add-edit-sm/add-edit-sm.component';
import {AddEditSaComponent} from './add-edit-sa/add-edit-sa.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
    declarations: [
        DashboardComponent,
        ManageDsmComponent,
        ManageSmComponent,
        ManageSaComponent,
        AddEditDsmComponent,
        AddEditSmComponent,
        AddEditSaComponent,
        DeleteComponent,
    ],
    imports: [
        CommonModule,
        GmRoutingModule,
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
export class GmModule {}
