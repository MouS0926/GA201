import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks:Task[]=[]
  constructor() { }

  getTask():Task[]{
    return this.tasks
  }

  addTask(task:Task):void{
   task.id=this.generateUniqueId()
    this.tasks.push(task)
  }

  updateTask(task:Task):void{
    let updatedindex = this.tasks.findIndex((el) => el.id === task.id);
    if (updatedindex !== -1) {
      this.tasks[updatedindex] = task;
    }
  }

  deleteTask(taskId: string): void {
    this.tasks = this.tasks.filter((el) => el.id !== taskId);
  }
  

  private generateUniqueId(): string {
    const min = 1000;
    const max = 9999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let uniqueId="TDID"+randomNumber
    return uniqueId;
  }

}
