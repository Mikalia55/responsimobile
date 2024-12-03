import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RacesListPage } from './races-list.page';

describe('RacesListPage', () => {
  let component: RacesListPage;
  let fixture: ComponentFixture<RacesListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RacesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
