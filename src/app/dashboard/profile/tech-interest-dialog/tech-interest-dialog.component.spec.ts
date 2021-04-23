import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechInterestDialogComponent } from './tech-interest-dialog.component';

describe('TechInterestDialogComponent', () => {
  let component: TechInterestDialogComponent;
  let fixture: ComponentFixture<TechInterestDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechInterestDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechInterestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
