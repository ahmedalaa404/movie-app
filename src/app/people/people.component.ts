import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  trendingmovies:any[]=[];
  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void
   {
    this._MoviesService.trinding('person').subscribe({
      next:(respones)=>this.trendingmovies=respones.results,
    })
  }

}
