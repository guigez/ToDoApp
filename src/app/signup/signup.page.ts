import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  user = {
    name: '',
    email: '',
    password: ''
  }

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  signup(){
    this.api.createUser(this.user).subscribe(result => {
      this.router.navigate(['/login']);
    });
  }

}
