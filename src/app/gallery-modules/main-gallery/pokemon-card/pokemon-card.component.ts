import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent implements OnInit{
  
  @Input() public loading: boolean | undefined;
  @Input() public error: boolean | undefined;
  @Input() public pokemon: any | undefined;

  constructor(){
  
  }

  ngOnInit(){
    console.log(this.pokemon)
  }

  getSpanishName(namesArray: any[]): string {
    const spanishLanguage = 'es';
    const spanishName = namesArray.find((item) => item.language.name === spanishLanguage);
  
    return spanishName ? spanishName.name : ''; // Devuelve el nombre en español si se encuentra, de lo contrario, devuelve una cadena vacía
  }

}
