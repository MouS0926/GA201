import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks:Task[]=[]
nextId: number = 1;
  constructor() { }

  getTask():Task[]{
    return this.tasks
  }

  addTask(task:Task):void{
    task.id = this.nextId++
    this.tasks.push(task)
  }

  updateTask(task:Task):void{
    let updatedindex = this.tasks.findIndex((el) => el.id === task.id);
    if (updatedindex !== -1) {
      this.tasks[updatedindex] = task;
    }
  }

  // deleteTask(taskId: number): void{
  //   this.tasks = this.tasks.filter((el) => el.id != taskId);
    
  // }
  

  deleteTask(taskId: number): void {
    const index = this.tasks.findIndex((task) => task.id === taskId);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
  
 

}
