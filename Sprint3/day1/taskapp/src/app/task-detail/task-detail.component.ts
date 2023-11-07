import { Component,OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent  implements OnInit{

  task:Task | undefined
  constructor(private route:ActivatedRoute,  private taskService:TaskService){}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const taskId = +params['id']; 
      this.task = this.taskService.getSingleTask(taskId) 
    });
  }
}
