import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { TableComponent } from './table/table.component';
import { toRoman } from './pipes/roman.pipe';
import { langInterceptor } from './services/lang.interceptor';
import { OpeningComponent } from './opening/opening.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TableComponent,
    OpeningComponent,
    toRoman
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: langInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
