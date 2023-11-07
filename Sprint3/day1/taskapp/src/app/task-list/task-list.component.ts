import { Component ,OnInit} from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks:Task[]=[]
constructor(private taskService:TaskService){}

  ngOnInit(): void {
    this.tasks=this.taskService.getTask()
  }

  taskToggle(taskId:number):void{
    this.taskService.toggleTask(taskId)
    this.getTasks()
    console.log(this.tasks);
    
  }
  getTasks(): void {
    this.tasks = this.taskService.getTask();
  }
  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
    this.getTasks(); 
  }

}
