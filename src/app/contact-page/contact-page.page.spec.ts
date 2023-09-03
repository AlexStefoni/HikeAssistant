import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactPagePage } from './contact-page.page';

describe('ContactPagePage', () => {
  let component: ContactPagePage;
  let fixture: ComponentFixture<ContactPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContactPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
