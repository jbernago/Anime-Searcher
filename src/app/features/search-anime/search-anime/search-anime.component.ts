import { GetEpisodesService } from './../../../core/api/get-episodes.service';
import { EpisodesListService } from './../../../core/services/episodes-list.service';
import { Component, OnInit } from '@angular/core';
import { SearchAnimeService, Result } from './../../../core/api/search-anime.service';

@Component({
  selector: 'app-search-anime',
  templateUrl: './search-anime.component.html',
  styleUrls: ['./search-anime.component.scss']
})
export class SearchAnimeComponent implements OnInit {

  listaDeEpisodios = [];

  idFirstAnime= '';

  animeName= '';

  constructor(public searchAnimeService: SearchAnimeService, public episodesListService:EpisodesListService, public getEpisodesService:GetEpisodesService) { 
  }

  searchAnime(animeNameReceived){
    this.animeName = animeNameReceived;
    this.searchAnimeService.getData(this.animeName).subscribe((res) =>{
        console.log(res.results);
        this.listaDeEpisodios = res.results;
        this.idFirstAnime = this.listaDeEpisodios[0].mal_id;
        this.episodesListService.idAnime = this.idFirstAnime ;
        this.episodesListService.image = this.listaDeEpisodios[0].image_url;

        if(this.episodesListService.idAnime !== undefined){
          // COMO SEGUNDO PARÁMETRO SE LE PUEDE PASAR LA PÁGINA A GETDATA(), POR DEFECTO ESTÁ A 1
          this.getEpisodesService.getData(this.episodesListService.idAnime).subscribe((res) =>{
            console.log(res);
            this.episodesListService.setEpisodes(res.episodes, res.episodes_last_page);
          });
        }

    });
  }
  
  

  ngOnInit(): void {
  }

}
