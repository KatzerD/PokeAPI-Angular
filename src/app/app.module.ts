import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainGalleryComponent } from './gallery-modules/main-gallery/main-gallery.component';
import { PokedexSearchComponent } from './gallery-modules/main-gallery/pokedex-search/pokedex-search/pokedex-search.component';
import { PokedexFilterComponent } from './gallery-modules/main-gallery/pokedex-filter/pokedex-filter/pokedex-filter.component';
import { PokemonCardComponent } from './gallery-modules/main-gallery/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainGalleryComponent,
    PokedexSearchComponent,
    PokedexFilterComponent,
    PokemonCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
