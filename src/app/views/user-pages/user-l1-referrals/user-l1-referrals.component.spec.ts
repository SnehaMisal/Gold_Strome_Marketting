import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserL1ReferralsComponent } from './user-l1-referrals.component';

describe('UserL1ReferralsComponent', () => {
  let component: UserL1ReferralsComponent;
  let fixture: ComponentFixture<UserL1ReferralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserL1ReferralsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserL1ReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
