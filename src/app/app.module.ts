import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieDetalisComponent } from './movie-detalis/movie-detalis.component';
import { SeemorePipe } from './seemore.pipe';
import { MoviesComponent } from './movies/movies.component';
import { SearchPipe } from './search.pipe';
import { PrefixImgPipe } from './prefix-img.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TvshowComponent } from './tvshow/tvshow.component';
import { PeopleComponent } from './people/people.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    MovieDetalisComponent,
    SeemorePipe,
    MoviesComponent,
    SearchPipe,
    PrefixImgPipe,
    TvshowComponent,
    PeopleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
