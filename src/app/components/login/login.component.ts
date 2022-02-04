import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  public userid:any
  id:any
  constructor(private signservice: AuthService, private router:Router, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userid.id = this.id
  }

  signifunctionUser() {
    this.signservice.login(this.signinuser).subscribe((res: any) => {
      this.loginsuccess = res
      console.log(this.loginsuccess)
      localStorage.setItem('token', this.loginsuccess.token);
      console.log(this.loginsuccess.id)
      this.router.navigate(['/profile', this.loginsuccess.id]);
    });
  }
}
