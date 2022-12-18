import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit 
{
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }


  trendingmovies:any[]=[];
  baseUrl:string='https://image.tmdb.org/t/p/w500';
  trendingTv:any[]=[];
  trendingPeople:any[]=[];


  constructor(private _MoviesService:MoviesService) { }




  ngOnInit(): void
   {
    this._MoviesService.trinding('movie').subscribe({
      next:(response)=>{
        this.trendingmovies=response.results.slice(0,10);
        console.log(response.results)
      }
    })



    this._MoviesService.trinding('tv').subscribe({
      next:(response)=>{
        this.trendingTv=response.results.slice(0,10);
        console.log(response.results)
      }
    })




    this._MoviesService.trinding('person').subscribe({
      next:(response)=>{
        this.trendingPeople=response.results.slice(0,10);
        console.log(response.results)
      }
    })



    }

}
