import { Episode } from './../api/get-episodes.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EpisodesListService {

  idAnime : string;

  urlAnime : string;

  episodes: Episode[];

  lastPage: number;

  image: '';

  // paginator = [];

  setEpisodes(receivedEpisodes, receivedLastPage){
    this.episodes = receivedEpisodes;
    this.lastPage = receivedLastPage;
    // this.paginator = [];
    // for(let i = 1; i<=this.lastPage; i++){
    //   this.paginator.push(i);
    // }
  }


  constructor() { }

}
