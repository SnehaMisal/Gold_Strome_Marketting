import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGmComponent } from './add-edit-gm.component';

describe('AddEditGmComponent', () => {
  let component: AddEditGmComponent;
  let fixture: ComponentFixture<AddEditGmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditGmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditGmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
