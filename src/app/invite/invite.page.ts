import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.page.html',
  styleUrls: ['./invite.page.scss'],
})
export class InvitePage implements OnInit {
   

  constructor(private api: ApiService, private router: Router, public toastController: ToastController, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async presentAlert(message: string){
    const alert = await this.alertCtrl.create({
      header: 'Invite Fail',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }


  invite(email: string){

    if(email.length != 0){
      const data = {
        emailUser: email,
        boardId: JSON.parse(localStorage.getItem('boardId'))
      }

      this.api.invite(data).subscribe(result =>{
        if(result.error){
          this.presentAlert(result.message);
        }
        else{
          this.presentToast('User Added');
          this.router.navigate(['/to-do']);
        }
      });
    } else {
      this.presentAlert('Insert some email.');
    }
  }
}
