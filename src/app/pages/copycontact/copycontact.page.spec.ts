import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CopycontactPage } from './copycontact.page';

describe('CopycontactPage', () => {
  let component: CopycontactPage;
  let fixture: ComponentFixture<CopycontactPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CopycontactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
