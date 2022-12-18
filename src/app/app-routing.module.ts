import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetalisComponent } from './movie-detalis/movie-detalis.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';

import { RegisterComponent } from './register/register.component';
import { TvshowComponent } from './tvshow/tvshow.component';

const routes: Routes = 

[
  {path:'',redirectTo:'login',pathMatch:'full',},
  {path:'Register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'movie-detalis/:id',component:MovieDetalisComponent,canActivate:[AuthGuard]},
  {path:'movies',component:MoviesComponent,canActivate:[AuthGuard]},
  {path:'tvshow',component:TvshowComponent},
  {path:'setting',loadChildren:()=>import('./setting/setting.module').then((x)=>x.SettingModule)},
  {path:'people',component:PeopleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
