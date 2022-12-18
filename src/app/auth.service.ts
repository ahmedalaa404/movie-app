import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService 
{
  userData:any=new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient,private _Router:Router) 
  { 
    if(localStorage.getItem('userToken'))
    {
      this.saveData();
    }
  }
  saveData()
  {
    let encoded=localStorage.getItem('userToken');
    if(encoded!=null)
    {
      let decodeData=jwtDecode(encoded)
      this.userData.next(decodeData);
      console.log(this.userData);
    }
  }

  
  logout()
  {
    localStorage.clear();
    this._Router.navigate(['login']);
    this.userData.next(null);
  }





  Register(forms:object):Observable<any>
  {
    return this._HttpClient.post('https://route-movies-api.vercel.app/signup',forms)
  }


  Login(forms:object):Observable<any>
  {
    return this._HttpClient.post('https://route-movies-api.vercel.app/signin',forms)
  }
}
