import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexSearchComponent } from './pokedex-search.component';

describe('PokedexSearchComponent', () => {
  let component: PokedexSearchComponent;
  let fixture: ComponentFixture<PokedexSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokedexSearchComponent]
    });
    fixture = TestBed.createComponent(PokedexSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
