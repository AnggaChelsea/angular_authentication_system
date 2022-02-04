import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public userid: any;
  id: any;
  public dataprofile: any;
  showtext = false;
  cobaprofile: any = {};
  addsaldo = {
    saldo: '',
  };
  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProfile(this.route.snapshot.paramMap.get('id'));
    this.dataprofile = this.route.snapshot.paramMap.get('id');
  }
  getProfile(id: any) {
    this.auth.myprofile(id).subscribe((data: any) => {
      // console.log(data)
      this.dataprofile = data;
      console.log(this.dataprofile);
    });
  }

  showtextnya() {
    this.showtext = true;
  }
  addSaldo(saldo:any) {
    this.auth.addSaldo(saldo).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/profile/' + this.dataprofile.id]);
    });
  }
}
