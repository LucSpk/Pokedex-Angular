import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { TypeColorDk, TypeColorLt, TypeColorTp } from 'src/app/models/typesColor';

// Services
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;
  public isLoading: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void{
    this.getPokemon;
  }

  get getPokemon() {
    const id = this.activeRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res; 
        this.isLoading = true;
        console.log(this.pokemon);
      }
    );
  }

  public leadingZero(str: string | number, size = 3): string {
    let s = String(str);
    while(s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }

  public getImg(id: string): string {
    return `../../../assets/pokemon/${id}.png`;
  }

  public tipoPokemon(types: any[]): string {
    const pokeTypes = types.map( (type : any) => type.type.name);
    console.log(pokeTypes);
    return pokeTypes[0]
  }

  public toUpperCaseFirsChar(value : string): string {
    const text = value.replace("-", " ");
    return text[0].toUpperCase() + text.substring(1);
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

  public getColorBaseTipoTp(types: string[]): string {
    const pokeTypes = types.map( (type : any) => type.type.name);
    const primitiveType = pokeTypes[0]
    return TypeColorTp[primitiveType as keyof typeof TypeColorTp];
  }

  public getColorTipoPokemonLt(type: string): string {
    return TypeColorLt[type as keyof typeof TypeColorLt];
  }
  public getColorTipoPokemonDk(type: string): string {
    return TypeColorDk[type as keyof typeof TypeColorDk];
  }
}
