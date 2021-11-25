import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Board } from 'src/models/Board';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  showNothing = false;
  boards: Board[];
  user = null;

  constructor(private api: ApiService, private auth:AuthService, public toastController: ToastController) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.listBoards(this.user.id);
  }

  listBoards(boardId: string){
    this.api.listBoardsByUser(boardId).subscribe(data => {
     
      this.boards = data.boards;

      if(this.boards.length != 0) this.showNothing = true;
    });
  }

  openTasks(board: Board){
    localStorage.setItem('boardId',JSON.stringify(board._id))
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Logout realized with Sucess.',
      duration: 2000
    });
    toast.present();
  }

  logout(){
    this.auth.logout();
    this.presentToast();
  }

}
