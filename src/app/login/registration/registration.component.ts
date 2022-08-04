import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {RegistrationService} from "../Services/registration.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  RegistrationGroup = this.fb.group({
    username:[],
    password:[],
    verifypassword:[]
  }) ;

  constructor(private fb:FormBuilder,private registrationService:RegistrationService,private route:Router) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.RegistrationGroup.value.password != this.RegistrationGroup.value.verifypassword){
      alert("loi xac nhan mat khau.")
    }else {
      this.registrationService.registration(this.RegistrationGroup.value).subscribe(res=>{
        this.route.navigate(['/'])
      })
    }

  }
}
