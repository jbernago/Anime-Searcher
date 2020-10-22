import { GetEpisodesService } from './../../../core/api/get-episodes.service';
import { EpisodesListService } from './../../../core/services/episodes-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {

  constructor(public episodesListService:EpisodesListService, public getEpisodesService: GetEpisodesService) {

  }

  ngOnInit(): void {

    

  }

  changePage(page){
    this.getEpisodesService.getData(this.episodesListService.idAnime, page).subscribe((res) =>{
      console.log(res);
      this.episodesListService.setEpisodes(res.episodes, res.episodes_last_page);
    });
  }
}
