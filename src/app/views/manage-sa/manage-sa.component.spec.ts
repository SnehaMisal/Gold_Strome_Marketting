import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSaComponent } from './manage-sa.component';

describe('ManageSaComponent', () => {
  let component: ManageSaComponent;
  let fixture: ComponentFixture<ManageSaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
