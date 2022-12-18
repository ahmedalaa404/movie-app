import { Injectable,OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate ,OnInit
 {
  constructor( private _Router:Router)
  {}
  ngOnInit(): void
  {

  }
  canActivate(): boolean
  {
    if(localStorage.getItem('userToken')!=null)
    {
          return true;
    }
    else
    {
      this._Router.navigate(['login']);
      return false;
    }

  }
  
}
