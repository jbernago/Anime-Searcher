import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchAnimeComponent } from './features/anime/search-anime/search-anime.component';
import { AnimeListComponent } from './features/anime/anime-list/anime-list.component';
import { AnimeItemComponent } from './features/anime/anime-list/anime-item/anime-item.component';
import { PaginatorPipe } from './shared/paginator.pipe';
import { HeaderComponent } from './core/components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AnimeComponent } from './features/anime/anime.component';
import { UserRegisterComponent } from './features/user-register/user-register.component';
import { UserListComponent } from './features/user-list/user-list.component';

import { ReactiveFormsModule } from "@angular/forms";

import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import {TableModule} from 'primeng/table';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',  
    redirectTo: 'searchAnime'
  },
  {
    path: 'searchAnime',
    component: AnimeComponent
  },
  {
    path: 'userRegister',
    component: UserRegisterComponent
  },
  {
    path: 'userList',
    component: UserListComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SearchAnimeComponent,
    AnimeListComponent,
    AnimeItemComponent,
    PaginatorPipe,
    HeaderComponent,
    AnimeComponent,
    UserRegisterComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    CalendarModule,
    ToastModule,
    PanelModule,
    ConfirmDialogModule,
    MessagesModule,
    TableModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
