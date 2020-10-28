import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Episode {
  episode_id: number;
  title: string;
  title_japanese: string;
  title_romanji: string;
  aired: Date;
  filler: boolean;
  recap: boolean;
  video_url: string;
  forum_url: string;
}

export interface EpisodeRes {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  episodes_last_page: number;
  episodes: Episode[];
}

@Injectable({
  providedIn: 'root'
})
export class GetEpisodesService {

  constructor(private httpClient: HttpClient) { }

  getData(idAnime, idPage=1){
    let urlApi = `${environment.animeApi}anime/${idAnime}/episodes/${idPage}`;
    return this.httpClient.get<EpisodeRes>(urlApi);
  }
}
