import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchAnimeComponent } from './features/search-anime/search-anime/search-anime.component';
import { AnimeListComponent } from './features/anime-list/anime-list/anime-list.component';
import { AnimeItemComponent } from './features/anime-list/anime-list/anime-item/anime-item.component';
import { PaginatorPipe } from './shared/paginator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchAnimeComponent,
    AnimeListComponent,
    AnimeItemComponent,
    PaginatorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
