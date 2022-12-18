import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit 
{
  isLoading:boolean=false;
  errorMessage:string='';
  registerForm:FormGroup= new FormGroup
  ({
    first_name:new FormControl(null,[Validators.required,Validators.pattern(/[a-zA-z]/),Validators.minLength(3),Validators.maxLength(10)]),
    last_name:new FormControl(null,[Validators.required,Validators.pattern(/[a-zA-z]/),Validators.minLength(3),Validators.maxLength(10)]),
    age:new FormControl(null,[Validators.required,Validators.min(10),Validators.max(30)]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl (null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)])

  })

  constructor(private _AuthService:AuthService,private _Router:Router) { }

  registeration()
  {

    if(this.registerForm.valid)
    {
      this.isLoading=true;
      this._AuthService.Register(this.registerForm.value).subscribe({
        next:(response)=>
        {
          if(response.message=='success')
          {
            console.log(response)
            this._Router.navigate(['login'])
          }
          else
          {
            this.errorMessage=response.message;
          }
        }       
      })
    }
    else
    {
      this.isLoading=true;
      return;
    }
  }

  ngOnInit(): void 
  {

  }

}
