import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-login-phone',
  templateUrl: './loginphone.component.html',
  styles: ['']
})
export class LoginPhoneComponent implements OnInit {
  loginuser = {
    phone: '',
  }
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
  }

  loginUserPhone(){
    console.log(this.loginuser);
  }
 
 
}
