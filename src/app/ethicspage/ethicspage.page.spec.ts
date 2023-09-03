import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EthicspagePage } from './ethicspage.page';

describe('EthicspagePage', () => {
  let component: EthicspagePage;
  let fixture: ComponentFixture<EthicspagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EthicspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
