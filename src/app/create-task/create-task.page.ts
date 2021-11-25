import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.page.html',
  styleUrls: ['./create-task.page.scss'],
})
export class CreateTaskPage implements OnInit {

  constructor(private api: ApiService, private router: Router, public toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Task Created with Sucess.',
      duration: 2000
    });
    toast.present();
  }

  createTask(title: String){
    const data = {
      title: title,
      status: "tasks",
      boardId: JSON.parse(localStorage.getItem('boardId'))
    }
    console.log(data)
    this.api.createTask(data).subscribe(result =>{
      this.presentToast();
      this.router.navigate(['/to-do']);
    });
  }
}
