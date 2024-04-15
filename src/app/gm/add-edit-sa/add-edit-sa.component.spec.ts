import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSaComponent } from './add-edit-sa.component';

describe('AddEditSaComponent', () => {
  let component: AddEditSaComponent;
  let fixture: ComponentFixture<AddEditSaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
