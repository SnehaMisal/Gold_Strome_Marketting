import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSmComponent } from './add-edit-sm.component';

describe('AddEditSmComponent', () => {
  let component: AddEditSmComponent;
  let fixture: ComponentFixture<AddEditSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
