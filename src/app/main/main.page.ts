import { Component, OnInit } from '@angular/core';
import { Board } from '../../models/Board';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  showNothing = false;
  boards: Board[];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.listBoards();
  }

  listBoards(){
    this.api.listBoards().subscribe(data => {
      this.boards = data;

      if(this.boards.length != 0) this.showNothing = true;
    });
  }

  openTasks(board: Board){
    localStorage.setItem('boardId',JSON.stringify(board._id))
    localStorage.setItem('tasks', JSON.stringify(board.tasks));
  }

}
