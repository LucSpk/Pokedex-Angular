import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  private setAllPokemons: any;
  public getAllPokemons: any;

  cardColors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    ghost: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5' ,
    ice: '#B7E8E8'
  }

  mainTypes = Object.keys(this.cardColors);

  constructor(
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void{
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        console.log(res);
        for (let i = 0; i < res.results.length; i++) {
          const pokemon = res.results[i];
          let status: any;
          status = pokemon.status;
        }

        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      }
    );
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });
    this.getAllPokemons = filter;
  }

  public leadingZero(str: string | number, size = 3): string {
    let s = String(str);
    while(s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }

  public estilizaCardPorTipo(types: any[]): string {  
    const pokeTypes = types.map( (type : any) => type.type.name);
    const type = this.mainTypes.find( type => pokeTypes.indexOf(type) > -1);
    
    if(type === "fire")
      return '#FFB997';

    if(type === "grass")
      return '#b3f3d5';

    if(type === "electric")
      return '#F4ECA4';

    if(type === "water")
      return '#A4D9E8';

    if(type === "ground")
      return '#D6C8A1';

    if(type === "rock")
      return '#D9D9C6';

    if(type === "fairy")
      return '#F7DDE8';

    if(type === "poison")
      return '#D1B7D8';

      if(type === "bug")
      return '#D8E1B7';

    if(type === "dragon")
      return '#B7B4D8';

    if(type === "psychic")
      return '#E1B7D8';
    
    if(type === "ghost")
      return '#C7B';

    if(type === "flying")
      return '#B7D8DE';

    if(type === "fighting")
      return '#D8C0B7';

    return '#D8D8D8';
  }

  public tipoPokemon(types: any[]): string {
    const pokeTypes = types.map( (type : any) => type.type.name);
    const type = this.mainTypes.find( type => pokeTypes.indexOf(type) > -1);
    
    if(type != undefined)
      return type;
    
    return "normal";
  }

}
