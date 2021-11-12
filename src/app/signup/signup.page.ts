import { Component, OnInit } from '@angular/core';
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

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  signup(){
    this.api.createUser(this.user);
  }

}
