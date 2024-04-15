import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDsmComponent } from './manage-dsm.component';

describe('ManageDsmComponent', () => {
  let component: ManageDsmComponent;
  let fixture: ComponentFixture<ManageDsmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDsmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
