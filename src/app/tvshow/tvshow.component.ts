import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
MoviesService
@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent implements OnInit {
  trendingmovies:any[]=[]
  constructor(private _movie:MoviesService) { }

  ngOnInit(): void 
  {
    this._movie.trinding('tv').subscribe
    ({
      next:(respones)=> this.trendingmovies=respones.results,
    })
  }

}
