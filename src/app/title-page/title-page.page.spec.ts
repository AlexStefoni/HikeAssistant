import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitlePagePage } from './title-page.page';

describe('TitlePagePage', () => {
  let component: TitlePagePage;
  let fixture: ComponentFixture<TitlePagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TitlePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
