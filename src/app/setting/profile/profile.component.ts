import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit 
{
  dataUser:any={};
  name:string='ahmed'

  constructor(private _AuthService:AuthService) { }


  ngOnInit(): void 
  {
    this._AuthService.userData.subscribe({next:()=>this.dataUser=this._AuthService.userData.getValue()})
    console.log(this.dataUser['age']);
  }

}
