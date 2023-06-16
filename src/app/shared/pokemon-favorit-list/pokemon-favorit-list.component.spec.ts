import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFavoritListComponent } from './pokemon-favorit-list.component';

describe('PokemonFavoritListComponent', () => {
  let component: PokemonFavoritListComponent;
  let fixture: ComponentFixture<PokemonFavoritListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonFavoritListComponent]
    });
    fixture = TestBed.createComponent(PokemonFavoritListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
