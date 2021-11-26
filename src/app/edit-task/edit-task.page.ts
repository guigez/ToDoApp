import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
})
export class EditTaskPage implements OnInit {

  constructor(private api: ApiService, private router: Router, public toastController: ToastController, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Task Edit with Sucess.',
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

  editTask(title: String){
    if(title.length != 0){
      const data = {
        title: title,
        status: "tasks",
        taskId: JSON.parse(localStorage.getItem('taskId'))
      }
      console.log(data)
      this.api.updateTask(data).subscribe(result =>{
        this.presentToast();
        this.router.navigate(['/to-do']);
      });
    } else {
      this.presentAlert();
    }

  }
}
