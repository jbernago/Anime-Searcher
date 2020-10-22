import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Result {
  mal_id: number;
  url: string;
  image_url: string;
  title: string;
  airing: boolean;
  synopsis: string;
  type: string;
  episodes: number;
  score: number;
  start_date?: Date;
  end_date?: Date;
  members: number;
  rated: string;
}

export interface AnimeRes {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  results: Result[];
  last_page: number;
}


@Injectable({
  providedIn: 'root'
})
export class SearchAnimeService {

  constructor(private httpClient: HttpClient) { }


  getData(animeName){
    let urlApi = `https://api.jikan.moe/v3/search/anime?q=${animeName} `;
    return this.httpClient.get<AnimeRes>(urlApi);
  }

}
