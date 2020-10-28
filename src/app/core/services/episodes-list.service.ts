import { Episode } from './../api/get-episodes.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EpisodesListService {

  idAnime : string;

  urlAnime : string;

  episodes: Episode[];

  lastPage: number;

  image: '';

  totalRecords: number;

  private searchAnimeSubject = new Subject();

  setEpisodes(receivedEpisodes, receivedLastPage){
    this.episodes = receivedEpisodes;
    this.lastPage = receivedLastPage;
    this.totalRecords = (this.lastPage)*100;
  }

  doNext(){
    this.searchAnimeSubject.next('ok');
  }

  getSearchSubject(){
    return this.searchAnimeSubject;
  }



  constructor() { }

}
