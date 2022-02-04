import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-phone',
  templateUrl: './loginphone.component.html',
  styles: ['']
})
export class LoginPhoneComponent implements OnInit {
  loginuser = {
    phone: '',
  }
  constructor(private authservice:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  loginUserPhone(){
    this.authservice.loginbyphone(this.loginuser).subscribe((res:any)=>{
      console.log(res)
      this.router.navigate(['/profile', res.id]);
    })
  }
 
 
}
