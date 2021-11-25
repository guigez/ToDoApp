import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
})
export class EditTaskPage implements OnInit {

  constructor(private api: ApiService, private router: Router, public toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Task Edit with Sucess.',
      duration: 2000
    });
    toast.present();
  }

  editTask(title: String){
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
  }
}
