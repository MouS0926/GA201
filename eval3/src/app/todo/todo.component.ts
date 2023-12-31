import { Component ,OnInit} from '@angular/core';
import { TodoService } from '../todo.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
tasks:Task[]=[]
newTask:string=""
filter:'all'|'pending'|'completed'='all'
constructor(private todoService:TodoService){}

ngOnInit(): void {
  this.tasks=this.todoService.getTask()
}


addTask():void{
  if(this.newTask.trim()!=""){
    const task:Task={
      id:Date.now().toString(),
      title:this.newTask,
      completed:false
    }

    this.todoService.addTask(task)
    this.newTask=""
  }
}

updateTask(task:Task):void{
  this.todoService.updateTask(task)
}

deleteTask(id:string):void{
  this.todoService.deleteTask(id)
}





getFilteredTasks(): Task[] {
  if (this.filter === 'all') {
    return this.tasks;
  } else {
    return this.tasks.filter((task) => (this.filter === 'pending' ? !task.completed : task.completed));
  }
}
}
