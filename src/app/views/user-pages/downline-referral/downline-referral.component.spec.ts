import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownlineReferralComponent } from './downline-referral.component';

describe('DownlineReferralComponent', () => {
  let component: DownlineReferralComponent;
  let fixture: ComponentFixture<DownlineReferralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownlineReferralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownlineReferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
