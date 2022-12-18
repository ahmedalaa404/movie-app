import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit
 {
  trendingmovies:any[]=[];
  contentPage:number[]=[];
  pageShow:number=1;
  tearm:string='';
  baseUrl:string='https://image.tmdb.org/t/p/w500';
  constructor(private _MoviesService:MoviesService) { }



  pageNumber(x:number)
  {
this._MoviesService.getMoviePage(x).subscribe({
next:(response)=>{
this.trendingmovies=response.results;
}
});
}
  ngOnInit(): void 
  {
    this._MoviesService.getMoviePage(this.pageShow).subscribe({
      next:(response)=>{

        this.trendingmovies=response.results;
      }
    });

    
    this.contentPage=new Array(12).fill(0).map(function(x,i){return i+1});




  }

}
