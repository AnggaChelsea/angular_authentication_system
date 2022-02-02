import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  signinuser = {
    email: '',
    password: '',
  };
  loginsuccess:any;
  constructor(private signservice: AuthService, private router:Router) {}

  ngOnInit(): void {}
  signifunctionUser() {
    this.signservice.login(this.signinuser).subscribe((res: any) => {
      this.loginsuccess = res
      console.log(this.loginsuccess)
      localStorage.setItem('token', this.loginsuccess.token);
      this.router.navigate(['/profile']);
    });
  }
}
