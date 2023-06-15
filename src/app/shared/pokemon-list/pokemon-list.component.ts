import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

import { TypeColorLt, TypeColorDk } from '../../models/typesColor';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  private setAllPokemons: any;
  public getAllPokemons: any;

  public apiError: boolean = false;
  public isLoading: boolean = false;

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
        this.isLoading = true;
      }, error => {
        this.apiError = true;
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

  public getColorBaseTipoLt(types: string[]): string {
    const pokeTypes = types.map( (type : any) => type.type.name);
    const primitiveType = pokeTypes[0]
    return TypeColorLt[primitiveType as keyof typeof TypeColorLt];
  }

  public getColorBaseTipoDk(types: string[]): string {
    const pokeTypes = types.map( (type : any) => type.type.name);
    const primitiveType = pokeTypes[0]
    return TypeColorDk[primitiveType as keyof typeof TypeColorDk];
  }

  public getColorTipoPokemonLt(type: string): string {
    return TypeColorLt[type as keyof typeof TypeColorLt];
  }
  public getColorTipoPokemonDk(type: string): string {
    return TypeColorDk[type as keyof typeof TypeColorDk];
  }

}
