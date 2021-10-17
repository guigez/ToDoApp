import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.page.html',
  styleUrls: ['./create-board.page.scss'],
})
export class CreateBoardPage implements OnInit {


  constructor( private api: ApiService, private router: Router) {  }

  ngOnInit() { }

  createBoard(title: String){
    const data = {
      title: title,
      userId: "6164d734a7c92f90abab433c"
    }
    this.api.createBoard(data).subscribe(result =>{
      this.router.navigate(['/main']);
    });
  }

}
