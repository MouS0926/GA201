"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
let taskIdCounter = 1;
class Task {
    constructor(title, description, dueDate, isCompleted = false) {
        this.taskId = taskIdCounter++;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.isCompleted = isCompleted;
    }
    markComplete() {
        this.isCompleted = true;
    }
    updateTask(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }
}
exports.Task = Task;
