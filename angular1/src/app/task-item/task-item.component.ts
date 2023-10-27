import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
  
})
export class TaskItemComponent {
  @Input() task!: Task ;
  editMode:boolean=false
  constructor(private taskService: TaskService) {
    
   }

  

  updateTask(){
    this.taskService.updateTask(this.task)
  }
  deleteTask(){
    this.taskService.deleteTask(this.task.id!)
   
  }

    toggleEditMode(){
      this.editMode= !this.editMode
    }
  
  editChange(){
this.taskService.updateTask(this.task)
this.toggleEditMode()
  }

}
