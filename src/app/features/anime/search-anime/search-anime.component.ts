import { GetEpisodesService } from './../../../core/api/get-episodes.service';
import { EpisodesListService } from './../../../core/services/episodes-list.service';
import { Component, OnInit } from '@angular/core';
import { SearchAnimeService} from './../../../core/api/search-anime.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-anime',
  templateUrl: './search-anime.component.html',
  styleUrls: ['./search-anime.component.scss']
})
export class SearchAnimeComponent implements OnInit {

  listaDeEpisodios = [];

  idFirstAnime= '';

  animeName= '';

  searchAnimeFormGroup = new FormGroup({});


  constructor(public searchAnimeService: SearchAnimeService, public episodesListService:EpisodesListService, public getEpisodesService:GetEpisodesService) { 
  }

  searchAnime(animeNameReceived){
    this.animeName = animeNameReceived;
    this.searchAnimeService.getData(this.animeName).subscribe((res) =>{
        console.log(res.results);
        this.listaDeEpisodios = res.results;
        this.idFirstAnime = this.listaDeEpisodios[0].mal_id;
        const firstSearch = (this.episodesListService.idAnime === undefined);
        this.episodesListService.idAnime = this.idFirstAnime ;
        this.episodesListService.image = this.listaDeEpisodios[0].image_url;
        if(!firstSearch){
          this.episodesListService.doNext();
        }
    });

  }
  
  

  ngOnInit(): void {



  }

}
