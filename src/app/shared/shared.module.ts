import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
