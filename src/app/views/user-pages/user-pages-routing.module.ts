import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserL1ReferralsComponent } from './user-l1-referrals/user-l1-referrals.component';
import { UserL2ReferralsComponent } from './user-l2-referrals/user-l2-referrals.component';
import { DownlineReferralComponent } from './downline-referral/downline-referral.component';
import { PayoutRequestComponent } from './payout-request/payout-request.component';
import { RevenueReportComponent } from './revenue-report/revenue-report.component';

const routes: Routes = [
  {
    path:'user_profile/:userId',
    component: UserProfileComponent
  },
  {
    path:'user-l1-referral/:userId',
    component: UserL1ReferralsComponent
  },
  {
    path:'user-l2-referral/:userId',
    component:UserL2ReferralsComponent
  },
  {
    path:'downline-referral/:userId',
    component:DownlineReferralComponent
  },
  {
    path:'revenue-report/:userId',
    component:RevenueReportComponent
  },
  {
    path:'payout-request/:userId',
    component:PayoutRequestComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPagesRoutingModule { }
