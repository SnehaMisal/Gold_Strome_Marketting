import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserL2ReferralsComponent } from './user-l2-referrals.component';

describe('UserL2ReferralsComponent', () => {
  let component: UserL2ReferralsComponent;
  let fixture: ComponentFixture<UserL2ReferralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserL2ReferralsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserL2ReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
