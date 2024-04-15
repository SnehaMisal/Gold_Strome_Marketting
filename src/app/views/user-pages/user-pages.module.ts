import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPagesRoutingModule } from './user-pages-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserL1ReferralsComponent } from './user-l1-referrals/user-l1-referrals.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UserL2ReferralsComponent } from './user-l2-referrals/user-l2-referrals.component';
import { DownlineReferralComponent } from './downline-referral/downline-referral.component';
import { PayoutRequestComponent } from './payout-request/payout-request.component';
import { RevenueReportComponent } from './revenue-report/revenue-report.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    UserL1ReferralsComponent,
    UserL2ReferralsComponent,
    DownlineReferralComponent,
    PayoutRequestComponent,
    RevenueReportComponent
  ],
  imports: [
    CommonModule,
    UserPagesRoutingModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class UserPagesModule { }
