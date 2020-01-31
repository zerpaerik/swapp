import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { SpeciesComponent } from './species/species.component';
import { PlanetsComponent } from './planets/planets.component';
import { StarshipsComponent } from './starships/starships.component';
import { TableComponent } from './table/table.component';
import { toRoman } from './pipes/roman.pipe';
import { langInterceptor } from './services/lang.interceptor';
import { OpeningComponent } from './opening/opening.component';
import { CharactersComponent } from './characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SpeciesComponent,
    PlanetsComponent,
    StarshipsComponent,
    TableComponent,
    OpeningComponent,
    toRoman,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: langInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
