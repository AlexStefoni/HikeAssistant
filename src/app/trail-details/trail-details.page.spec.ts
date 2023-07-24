import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrailDetailsPage } from './trail-details.page';

describe('TrailDetailsPage', () => {
  let component: TrailDetailsPage;
  let fixture: ComponentFixture<TrailDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrailDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
