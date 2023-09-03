import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTrailsPage } from './add-trails.page';

describe('AddTrailsPage', () => {
  let component: AddTrailsPage;
  let fixture: ComponentFixture<AddTrailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddTrailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
