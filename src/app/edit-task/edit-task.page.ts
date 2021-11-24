import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
})
export class EditTaskPage implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  editTask(title: String){
    const data = {
      title: title,
      status: "tasks",
      taskId: JSON.parse(localStorage.getItem('taskId'))
    }
    console.log(data)
    this.api.updateTask(data).subscribe(result =>{
      this.router.navigate(['/to-do']);
    });
  }
}
