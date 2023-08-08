import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterTabPage } from './register-tab.page';

describe('RegisterTabPage', () => {
  let component: RegisterTabPage;
  let fixture: ComponentFixture<RegisterTabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
