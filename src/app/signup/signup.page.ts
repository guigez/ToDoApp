import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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

  constructor(private api: ApiService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Create Fail',
      message: 'Insert the informations.',
      buttons: ['OK']
    });
    await alert.present();
  }

  signup() {
    if (this.user.name != '' && this.user.email != '' && this.user.password != '') {
      this.api.createUser(this.user).subscribe(result => {
        this.router.navigate(['/login']);
      });
    } else {
      this.presentAlert();
    }
  }

}
