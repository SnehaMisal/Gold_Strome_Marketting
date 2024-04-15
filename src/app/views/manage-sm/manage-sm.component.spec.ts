import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSmComponent } from './manage-sm.component';

describe('ManageSmComponent', () => {
  let component: ManageSmComponent;
  let fixture: ComponentFixture<ManageSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
