import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public apiError: boolean = false;

  public listIds:any = [];

  public idPokemon: number = 0; 

  constructor(
    private activeRoute: ActivatedRoute,
    private pokeApiService: PokeApiService,
    private router: Router
  ) {}

  ngOnInit(): void{
    this.getPokemon;
    this.geraListaIds();
    this.idPokemon = this.activeRoute.snapshot.params['id'];
  }

  get getPokemon() {
    const id = this.activeRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res; 
        this.isLoading = true;
      }, error => {
        this.apiError = true;
      }
    );
  }

  public getPokemonId(id: any ) {
    
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

  public convertePeso(pesoEmHectogramas: number): string {
    if(pesoEmHectogramas === undefined || pesoEmHectogramas === null)
      return '0 Kg';

    let peso = pesoEmHectogramas * 0.1;
    let pesoArredondado = peso.toFixed(2);
    
    if (peso >= 1)
      return `${pesoArredondado} Kg`;
    
    return `${pesoArredondado} g`;
  }

  public converteAltura(alturaEmDecimetros: number) {
    if(alturaEmDecimetros === undefined || alturaEmDecimetros === null)
      return '0 m';
    
    let altura = alturaEmDecimetros * 0.1;
    let alturaArredondada = altura.toFixed(2)
    return `${alturaArredondada} m`;
  }

  mudapokemon(id: number) {
    this.router.navigate(['pokemon/details/',id]);

    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res; 
        this.isLoading = true;
        this.geraListaIds();
      }, error => {
        this.apiError = true;
      }
    );
  }

  private geraListaIds() {
    const idAtua = this.activeRoute.snapshot.params['id'];
    let setListIds = [];
    setListIds.unshift(idAtua);

      for(let x: number = 1; x < 5; x++) {
        if((parseInt(idAtua) - x) >= 1) 
          setListIds.unshift(parseInt(idAtua) - x);
        
        if((parseInt(idAtua) + x) <= this.pokeApiService.getTotalPokemon()) 
          setListIds.push(parseInt(idAtua) + x);

      } 
    this.listIds = setListIds;
  }
}
