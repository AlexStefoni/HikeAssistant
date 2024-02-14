import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalTipsPage } from './local-tips.page';

describe('LocalTipsPage', () => {
  let component: LocalTipsPage;
  let fixture: ComponentFixture<LocalTipsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LocalTipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
