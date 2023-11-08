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
  public pokemonId: number = 0;
  public loading: boolean = true;
  public error: boolean = false;
  public limit: number = 15;
  public offset: number = 0;

  public id: number;
  public name: string;
  public names: Array<any>;
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

  constructor(
    private _pokemonService: PokemonService
  ) {

    this.id = 0;
    this.name = "";
    this.names = [];
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

  }

  ngOnInit(): void {
    this.loadPokemonList();
  }

  loadPokemonList() {
    this._pokemonService.getPokemonSpeciesInterval(this.offset, this.limit).subscribe(
      results => {
        if (results && results != null) {
          this.pokemonListSpecies = results.results;

          for (let i = 0; i < this.pokemonListSpecies.length; i++) {

            let pokemonSpecie = this.loadPokemonDataSpecie(this.pokemonListSpecies[i].url);
            
            //this.pokemon = new Pokemon(this.id, this.name, this.names, this.description, this.varieties, this.types, this.generation, this.height, this.weight, this.sprite, this.hp, this.attack, this.defense, this.specialAttack, this.specialDefense, this.speed)

            console.log(pokemonSpecie)
          }

          this.loading = false;
          this.error = false;

        } else {
          this.pokemonListSpecies = undefined;
          this.loading = false;
          this.error = true;
          console.error('No se encontró el pokemon o no tiene un nombre válido:', results);
        }
      },
      error => {
        console.error('Error al obtener el pokemon:', error);
      }
    )
  }

  loadPokemonDataSpecie(url: string): any {

    this._pokemonService.getPokemonSpecieByUrl(url).subscribe(
      result => {
        this.id = result.id;
        this.description = result.flavor_text_entries[0];
        this.name = result.name;
        this.names = result.names;
        this.varieties = result.varieties;

        let pokemonSpecie = {
          "id": this.id,
          "description": this.description,
          "name": this.name,
          "names": this.names,
          "varieties" : this.varieties
        }
        
        return pokemonSpecie
        
      },
      error => {
        console.log("Error: " + error);
        return undefined;
      }
    )
  }

  loadPokemonData(pokemonId: number): any {

    this._pokemonService.getPokemon(pokemonId).subscribe(
      result => {
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
      },
      error => {

      }
    );
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
}
