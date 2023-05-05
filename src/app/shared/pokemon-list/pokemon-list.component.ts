import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {

  constructor(
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void{
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => console.log(res)
    );
  }

}
