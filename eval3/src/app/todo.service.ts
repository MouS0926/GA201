import { Injectable } from '@angular/core';
import {Task} from "./task.model"
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private tasks:Task[]=[]
 
  constructor() { }


  private getTaskfromLS():Task[]{
      const tasksLS=localStorage.getItem("tasks")
    return tasksLS?JSON.parse(tasksLS):[]
  }

  private setTaskinLS():void{
    localStorage.setItem("tasks",JSON.stringify(this.tasks))
}

  getTask():Task[]{
    this.tasks=this.getTaskfromLS()
    return this.tasks

  }

  addTask(task:Task):void{
    this.tasks.push(task)
    this.setTaskinLS()
  }

updateTask(task:Task):void{
  let index=this.tasks.findIndex((el)=>el.id==task.id)
  if(index!=-1)
  {
    this.tasks[index]=task
    this.setTaskinLS()
  }
}


deleteTask(id:string):void{
  this.tasks=this.tasks.filter((el)=>el.id!=id)
  this.setTaskinLS()
}





}
