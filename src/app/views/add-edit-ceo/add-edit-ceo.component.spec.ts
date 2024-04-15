import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCeoComponent } from './add-edit-ceo.component';

describe('AddEditCeoComponent', () => {
  let component: AddEditCeoComponent;
  let fixture: ComponentFixture<AddEditCeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
