import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGallery } from './main-gallery';

describe('MainGallery', () => {
  let component: MainGallery;
  let fixture: ComponentFixture<MainGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainGallery],
    }).compileComponents();

    fixture = TestBed.createComponent(MainGallery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
