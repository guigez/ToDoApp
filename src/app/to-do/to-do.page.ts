import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],
})
export class ToDoPage implements OnInit {


  listTasks = ['A - 1', 'A - 2', 'A - 3'];
  listDoing = ['B - 1', 'B - 2', 'B - 3'];
  listCompleted = ['C - 1', 'C - 2', 'C - 3'];


  constructor() { }

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    }else{
        transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

}
