import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  trinding(mediaType:string='trending'):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=f2291e5d64d84082e4b2181b3587d77d`)
  }

  getMoviesDetails(movie_id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=f2291e5d64d84082e4b2181b3587d77d&language=en-US
    `)
  }
  getMoviePage(numberPage:number=1):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=f2291e5d64d84082e4b2181b3587d77d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${numberPage}&with_watch_monetization_types=flatrate`)
  }


}
