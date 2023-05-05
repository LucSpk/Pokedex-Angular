import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {

  public getAllPokemons: any;

  constructor(
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void{
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.getAllPokemons = res.results;
        console.log(this.getAllPokemons);
      }
    );
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);
    while(s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }

}
