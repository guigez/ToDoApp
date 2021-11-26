import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.page.html',
  styleUrls: ['./create-task.page.scss'],
})
export class CreateTaskPage implements OnInit {

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

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Create Fail',
      message: 'Insert some title.',
      buttons: ['OK']
    });
    await alert.present();
  }

  createTask(title: String){
    if(title.length != 0){
      const data = {
        title: title,
        status: "tasks",
        boardId: JSON.parse(localStorage.getItem('boardId'))
      }
      console.log(data)
      this.api.createTask(data).subscribe(result =>{
        this.presentToast('Task Created with Sucess.');
        this.router.navigate(['/to-do']);
      });
    } else {
      this.presentAlert();
    }
  }
  
}
