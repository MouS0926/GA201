// todo-form.component.ts
import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  title: string = '';
  description: string = '';

  constructor(private taskService: TaskService) {}

  addTodo() {
    // Check if the title is not empty before adding the todo
    if (this.title.trim() !== '') {
      const newTask = {
        id: '',
        title: this.title,
        description: this.description,
        completed: false,
      };

      this.taskService.addTask(newTask);

      // Clear the input fields after adding the todo
      this.title = '';
      this.description = '';
    }
  }
}
