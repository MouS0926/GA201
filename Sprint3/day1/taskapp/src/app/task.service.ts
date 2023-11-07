import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks:Task[]=[]
  private lastId:number=0
  constructor() { }

  addTask(task:Task):void{

    task.id=this.generateNewId()
    this.tasks.push(task)
}

    getTask():Task[]{
        return this.tasks
    }

    toggleTask(taskid:number){
        const task=this.tasks.find((el)=>el.id==taskid)
        if(task)
        {
          task.completed=!task.completed
        }
    }

    getSingleTask(taskid:number):Task|undefined{
      return this.tasks.find((el) => el.id === taskid);
    }

    deleteTask(taskId: number): void {
      const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        this.tasks.splice(taskIndex, 1);
      }
    }
  private generateNewId():number{
    return ++this.lastId
  }
}
