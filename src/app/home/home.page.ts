import { Component } from '@angular/core';
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

  constructor(private api: ApiService, private auth:AuthService) { }

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

  logout(){
    this.auth.logout();
  }

}
