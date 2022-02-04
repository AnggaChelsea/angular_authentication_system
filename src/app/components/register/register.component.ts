import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registeruserdata:any = {
    email: '',
    password: '',
    phone: '',
  };
  user: any;
  buttonhidden:any;
  datausernest: any[] = [];
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.getdatauser();
  }

  getdatauser() {
    console.log('ini bisa')
    
      this.auth.getdatausernest().subscribe((res: any) => {
        this.user = res;
        console.log(this.user);
        for(let i=0; i<this.user.length; i++){
          this.datausernest.push(this.user[i].phone)
        }
        console.log(this.datausernest)
      });
   
  }

  registeruser(event: Event) {
    this.auth.registerUser(this.registeruserdata).subscribe((res: any) => {
      this.user = res;
      this.registeruserdata.phone = (<HTMLInputElement>event.target).value
      if(this.datausernest.includes(this.registeruserdata.phone)){
        alert('Phone Number Already Exist')
        this.buttonhidden = false
      }
      console.log(this.user);
      this.router.navigate(['/login']);
    });
  }

  onSubmit() {
    this.auth.registerUser(this.registeruserdata).subscribe((res: any) => {
      this.user = res;
      if(this.datausernest.includes(this.registeruserdata.phone)){
        alert('Phone Number Already Exist')
        this.buttonhidden = false
      }
      console.log(this.user);
      this.router.navigate(['/login']);
    });
  }
 hiddenbutton(){
   if(this.registeruserdata.email === '' || this.registeruserdata.password === '' || this.registeruserdata.phone === ''){
      this.buttonhidden = true
   }else{
      this.buttonhidden = false
   }
 }
}
