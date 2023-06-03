import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// -- Components
import { PokedexHeaderComponent } from './pokedex-header/pokedex-header.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokedexFooterComponent } from './pokedex-footer/pokedex-footer.component';

@NgModule({
  declarations: [
    PokedexHeaderComponent,
    PokemonSearchComponent,
    PokemonListComponent,
    PokedexFooterComponent
  ],
  exports: [
    PokedexHeaderComponent,
    PokemonSearchComponent,
    PokemonListComponent,
    PokedexFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
