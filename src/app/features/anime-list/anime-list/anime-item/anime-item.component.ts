import { Component, Input, OnInit } from '@angular/core';
import { Episode } from 'src/app/core/api/get-episodes.service';

@Component({
  selector: 'app-anime-item',
  templateUrl: './anime-item.component.html',
  styleUrls: ['./anime-item.component.scss']
})
export class AnimeItemComponent implements OnInit {

  @Input() receivedData: Episode;

  constructor() { }



  ngOnInit(): void {
  }

}
