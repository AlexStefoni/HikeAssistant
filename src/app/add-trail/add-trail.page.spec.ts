import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTrailPage } from './add-trail.page';

describe('AddTrailPage', () => {
  let component: AddTrailPage;
  let fixture: ComponentFixture<AddTrailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddTrailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
