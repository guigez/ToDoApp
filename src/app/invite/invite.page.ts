import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.page.html',
  styleUrls: ['./invite.page.scss'],
})
export class InvitePage implements OnInit {
   

  constructor(private api: ApiService, private router: Router, public toastController: ToastController) { }

  ngOnInit() {
  }

  
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  invite(email: string){
    const data = {
      emailUser: email,
      boardId: JSON.parse(localStorage.getItem('boardId'))
    }

    console.log(data)
    this.api.invite(data).subscribe(result =>{
      if(result.error){
        this.presentToast(result.error);
      }
      else{
        this.presentToast('User Added');
      }

    });
   
    this.router.navigate(['/to-do']);
  }
}
