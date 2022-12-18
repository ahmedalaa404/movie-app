import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
AuthService
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit 
{
  isLoading:boolean=false;
  errorMessage:string='';
  LoginForm:FormGroup=new FormGroup
  ({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl (null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)])
  })

  constructor(private _AuthService:AuthService,private _Router:Router) 
  { }


  submition()
  {
    this.isLoading=true;
   if(this.LoginForm.valid)
   {
    this._AuthService.Login(this.LoginForm.value).subscribe
    (
      {
        next:(response)=>
        {
   
          if(response['message']=='success')
          {
            this.isLoading=false;
            localStorage.setItem('userToken',response.token)
            this._Router.navigate(['home'])
            this._AuthService.saveData();
          }
            else
            {
              this.isLoading=false;
              this.errorMessage=response.message;
            }
          }
        }
   
    )

   }
   else
   {
    return;
   }
  }
  ngOnInit(): void {
  }
  }




