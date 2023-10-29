import { Task } from "./src/models/task";
import { taskManager } from "./src/models/taskmanager";

// let task1=new Task("learnig ts","description of ts",new Date('2023-10-20'))
// let task2 = new Task("Buy groceries", "Milk, eggs, bread", new Date('2023-10-30'));
// let task3 = new Task("Finish project", "Task Management System", new Date('2023-10-28'));

const taskManager1 = new taskManager();
taskManager1.addTask(task1);
taskManager1.addTask(task2);

console.log(taskManager1.getCompletedTask());
console.log(taskManager1.getPendingtasks());