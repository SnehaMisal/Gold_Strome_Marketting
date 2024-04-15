import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDsmComponent } from './add-edit-dsm.component';

describe('AddEditDsmComponent', () => {
  let component: AddEditDsmComponent;
  let fixture: ComponentFixture<AddEditDsmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDsmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
