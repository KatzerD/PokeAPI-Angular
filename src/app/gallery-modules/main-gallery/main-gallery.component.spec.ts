import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGalleryComponent } from './main-gallery.component';

describe('MainGalleryComponent', () => {
  let component: MainGalleryComponent;
  let fixture: ComponentFixture<MainGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainGalleryComponent]
    });
    fixture = TestBed.createComponent(MainGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
