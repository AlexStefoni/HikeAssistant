import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrailsPage } from './trails.page';

describe('TrailsPage', () => {
  let component: TrailsPage;
  let fixture: ComponentFixture<TrailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
