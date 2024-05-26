import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccesscopyPage } from './successcopy.page';

describe('SuccesscopyPage', () => {
  let component: SuccesscopyPage;
  let fixture: ComponentFixture<SuccesscopyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesscopyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
