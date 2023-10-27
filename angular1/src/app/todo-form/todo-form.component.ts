// todo-form.component.ts
import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
 task:Task=new Task()
  constructor(private taskService: TaskService) {}

  addTask() {
    this.task.isCompleted=false
   this.taskService.addTask(this.task)
   this.task = new Task();
   console.log(this.taskService.getTask());
   
  }

 
}
