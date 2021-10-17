import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.page.html',
  styleUrls: ['./create-task.page.scss'],
})
export class CreateTaskPage implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  createTask(title: String){
    const data = {
      title: title,
      status: "tasks",
      boardId: JSON.parse(localStorage.getItem('boardId'))
    }
    console.log(data)
    this.api.createTask(data).subscribe(result =>{
      this.router.navigate(['/main']);
    });
  }
}
