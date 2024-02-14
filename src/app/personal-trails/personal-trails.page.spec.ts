import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalTrailsPage } from './personal-trails.page';

describe('PersonalTrailsPage', () => {
  let component: PersonalTrailsPage;
  let fixture: ComponentFixture<PersonalTrailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PersonalTrailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
