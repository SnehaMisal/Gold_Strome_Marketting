import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCeoComponent } from './manage-ceo.component';

describe('ManageCeoComponent', () => {
  let component: ManageCeoComponent;
  let fixture: ComponentFixture<ManageCeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
