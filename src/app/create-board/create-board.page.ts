import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.page.html',
  styleUrls: ['./create-board.page.scss'],
})
export class CreateBoardPage implements OnInit {


  constructor( private api: ApiService, private auth: AuthService, private router: Router, public toastController: ToastController) {  }

  ngOnInit() { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Board Created with Sucess.',
      duration: 2000
    });
    toast.present();
  }

  createBoard(title: String){
    const data = {
      title: title,
      userId: this.auth.getUser().id
    }
    this.api.createBoard(data).subscribe(result =>{
      this.presentToast();
      this.router.navigate(['/home']);
    });
  }

}
