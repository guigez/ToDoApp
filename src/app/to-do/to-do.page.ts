import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../models/task';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],
})
export class ToDoPage implements OnInit {


  listTasks:Task[] = []
  listDoing:Task[] = [];
  listCompleted:Task[] = [];

  tasks: Task[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.tasks = JSON.parse(localStorage.getItem('tasks'));

    this.tasks.forEach(element => {
      switch(element.status){
        case 'tasks':
          this.listTasks.push(element);
          break;

        case 'doing':
          this.listDoing.push(element);
          break;

        case 'completed':
          this.listCompleted.push(element);
          break;

        default:
          break;
      }          
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    }else{
        transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

}
