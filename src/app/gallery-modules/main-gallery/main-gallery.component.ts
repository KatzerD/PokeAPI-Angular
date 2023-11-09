import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/model/pokemon';

@Component({
  selector: 'app-main-gallery',
  templateUrl: './main-gallery.component.html',
  styleUrls: ['./main-gallery.component.css'],
  providers: [PokemonService]
})
export class MainGalleryComponent implements OnInit {

  public pokemon: any;
  public pokemonSpecie: any;
  public pokemonListSpecies: Array<Pokemon> | any;
  public pokemonList: Array<any>;
  public pokemonId: number = 0;
  public loading: boolean = true;
  public error: boolean = false;
  public limit: number = 15;
  public offset: number = 0;

  public id: number;
  public name: string;
  public names: Array<any>;
  public genera: string; 
  public description: object;
  public varieties: Array<any>;
  public types: Array<any>;
  public generation: string;
  public height: number;
  public weight: number;
  public sprite: object;
  public hp: number;
  public attack: number;
  public defense: number;
  public specialAttack: number;
  public specialDefense: number;
  public speed: number;

  public elmnt = document.getElementsByClassName("content");

  constructor(
    private _pokemonService: PokemonService
  ) {

    this.id = 0;
    this.name = "";
    this.names = [];
    this.genera = "";
    this.description = {};
    this.varieties = [];
    this.types = [];
    this.generation = "";
    this.height = 0;
    this.weight = 0;
    this.sprite = {};
    this.hp = 0;
    this.attack = 0;
    this.defense = 0;
    this.specialAttack = 0;
    this.specialDefense = 0;
    this.speed = 0;

    this.pokemonList = [];

  }

  ngOnInit(): void {
    this.loadPokemonList();
  }

  async loadPokemonList() {

    this.pokemonList = [];

    const result = await this._pokemonService.getPokemonSpeciesInterval(this.offset, this.limit).toPromise();

    if (result && result != null) {
      this.pokemonListSpecies = result.results;

      for (let i = 0; i < this.pokemonListSpecies.length; i++) {


        let pokemonSpecie = await this.loadPokemonDataSpecie(this.pokemonListSpecies[i].url);
        let pokemonData = await this.loadPokemonData(pokemonSpecie.id);

        this.pokemon = { pokemonSpecie, pokemonData };
        this.pokemonList.push(this.pokemon);

      }



    } else {

      this.pokemonListSpecies = undefined;
      this.loading = false;
      this.error = true;
      console.error('No se encontró el pokemon o no tiene un nombre válido:', result);
    }

  }

  async loadPokemonDataSpecie(url: string): Promise<any> {

    try {
      const result = await this._pokemonService.getPokemonSpecieByUrl(url).toPromise();
      this.id = result.id;
      this.description = result.flavor_text_entries[0];
      this.name = result.name;
      this.names = result.names;

      const englishGenera = result.genera.find((entry: any) => entry.language.name === "es");

      if (englishGenera) {
        this.genera = englishGenera.genus;
      }

      this.varieties = result.varieties;

      let pokemonSpecie = {
        "id": this.id,
        "description": this.description,
        "name": this.name,
        "names": this.names,
        "genera": this.genera,
        "varieties": this.varieties
      };


      return pokemonSpecie;
    } catch (error) {
      console.log("Error: " + error);
      return undefined;
    }

  }

  async loadPokemonData(pokemonId: number): Promise<any> {

    try {
      const result = await this._pokemonService.getPokemon(pokemonId).toPromise();
      this.height = result.height;
      this.weight = result.weight;
      this.sprite = result.sprites.other;
      this.hp = result.stats[0].base_stat;
      this.attack = result.stats[1].base_stat;
      this.defense = result.stats[2].base_stat;
      this.specialAttack = result.stats[3].base_stat;
      this.specialDefense = result.stats[4].base_stat;
      this.speed = result.stats[5].base_stat;
      this.types = result.types;

      let pokemonData = {
        "height": this.height,
        "weight": this.weight,
        "sprite": this.sprite,
        "hp": this.hp,
        "attack": this.attack,
        "defense": this.defense,
        "specialAttack": this.specialAttack,
        "specialDefense": this.specialDefense,
        "speed": this.speed,
        "types": this.types
      }

      return pokemonData;
    } catch(error){
      console.log(error)
    }

  }


  plusInterval() {
    this.offset += 15;

    this.loadPokemonList();
  }

  minusInterval() {
    if (this.offset != 0) {
      this.offset -= 15;
      this.loadPokemonList();
    }
  }

  scrollToTop(){
    
  }
}
