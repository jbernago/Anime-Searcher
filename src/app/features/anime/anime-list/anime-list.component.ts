import { GetEpisodesService } from './../../../core/api/get-episodes.service';
import { EpisodesListService } from './../../../core/services/episodes-list.service';
import { ChangeDetectorRef, Component, EventEmitter, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {

  totalRecords = 0;
  paginator: any;

  @ViewChild('tableEpisodes') tableEpisodes;


  constructor(public episodesListService:EpisodesListService, public getEpisodesService: GetEpisodesService, private changeDetectorRef:ChangeDetectorRef) {

  }

  ngOnInit(): void {

    this.episodesListService.getSearchSubject().subscribe(() =>{
      // this.loadAnimes();
      this.tableEpisodes.clear();
      this.tableEpisodes.onLazyLoad.emit(this.tableEpisodes.createLazyLoadMetadata());
    });
    

  }

  loadAnimes(event = {first:0}){
    let pagina = ((event.first/100) + 1)
    console.log("Página: " + pagina);
    this.getEpisodesService.getData(this.episodesListService.idAnime, pagina).subscribe((res) =>{
      // this.changeDetectorRef.detectChanges();
      this.episodesListService.setEpisodes(res.episodes, res.episodes_last_page);
    });
  }
}
