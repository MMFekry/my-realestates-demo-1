import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeescopyPage } from './feescopy.page';

describe('FeescopyPage', () => {
  let component: FeescopyPage;
  let fixture: ComponentFixture<FeescopyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FeescopyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
