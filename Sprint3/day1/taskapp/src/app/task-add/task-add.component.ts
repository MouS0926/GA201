import { Component } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {

  newtask:Task=new Task(0,"","",false)

  constructor(private taskService:TaskService){}

 
  onSubmit(form:NgForm){
      this.taskService.addTask(this.newtask)
      console.log(this.newtask);
      this.newtask=new Task(0,"","",false)
      form.resetForm
    }

}
