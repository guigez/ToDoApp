import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.page.html',
  styleUrls: ['./create-board.page.scss'],
})
export class CreateBoardPage implements OnInit {


  constructor( private api: ApiService, private auth: AuthService, private router: Router, public toastController: ToastController, private alertCtrl: AlertController) {  }

  ngOnInit() { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Board Created with Sucess.',
      duration: 2000
    });
    toast.present();
  }

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Create Fail',
      message: 'Insert some title.',
      buttons: ['OK']
    });
    await alert.present();
  }

  createBoard(title: String){
    if(title.length != 0){
      const data = {
        title: title,
        userId: this.auth.getUser().id
      }
      this.api.createBoard(data).subscribe(result =>{
        this.presentToast();
        this.router.navigate(['/home']);
      });
    } else {
      this.presentAlert();
    }
  }

}
