import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// -- Components
import { PokedexHeaderComponent } from './pokedex-header/pokedex-header.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [
    PokedexHeaderComponent,
    PokemonSearchComponent,
    PokemonListComponent
  ],
  exports: [
    PokedexHeaderComponent,
    PokemonSearchComponent,
    PokemonListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
