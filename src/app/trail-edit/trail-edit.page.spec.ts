import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrailEditPage } from './trail-edit.page';

describe('TrailEditPage', () => {
  let component: TrailEditPage;
  let fixture: ComponentFixture<TrailEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrailEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
