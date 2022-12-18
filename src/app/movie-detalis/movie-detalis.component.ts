import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-detalis',
  templateUrl: './movie-detalis.component.html',
  styleUrls: ['./movie-detalis.component.scss']
})
export class MovieDetalisComponent implements OnInit {
  movieId:string='';
  movDetails:any;
  baseUrl:string='https://image.tmdb.org/t/p/w500';
  constructor(private _MoviesService:MoviesService ,private _ActivatedRoute:ActivatedRoute) { }


  ngOnInit(): void 
  {
    this.movieId=this._ActivatedRoute.snapshot.params['id'];

    this._MoviesService.getMoviesDetails(this.movieId).subscribe
    ({
      next:(response)=>{this.movDetails=response;
        console.log(this.movDetails)
      }
    })

  }

}
