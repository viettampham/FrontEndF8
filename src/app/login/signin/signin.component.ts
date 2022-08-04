import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {LoginService} from "../Services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  LoginForm = this.fb.group({
    username:[],
    password:[]
  });

  constructor(private fb:FormBuilder, private loginservice:LoginService, private route:Router) { }

  ngOnInit(): void {
  }

  Submit() {
    this.loginservice.Signin(this.LoginForm.value).subscribe(res=>{
      if (res.token!=null){
        this.route.navigate(['home'])
      }
    },error => {
      alert("Sai tai khoan hoac mat khau")
    })
  }
}
