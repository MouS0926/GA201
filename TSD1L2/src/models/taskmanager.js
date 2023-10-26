"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taslManager = void 0;
class taslManager {
    constructor() {
        this.tasks = [];
    }
    //adding task
    addTask(task) {
        this.tasks.push(task);
    }
    updateTask(taskId, title, description, dueDate) {
        let task = this.tasks.find((el) => el.taskId == taskId);
        if (task) {
            task.updateTask(title, description, dueDate);
        }
        else {
            console.log(`task with ${taskId} not found`);
        }
    }
    deleteTask(taskId) {
        let deletedtask = this.tasks.find((el) => el.taskId == taskId);
        if (deletedtask) {
            this.tasks.filter((el) => el.taskId != taskId);
        }
        else {
            console.log(`task with ${taskId} not found`);
        }
    }
    getCompletedTask() {
        let completedTask = this.tasks.filter((el) => el.isCompleted == true);
        return completedTask;
    }
    getPendingtasks() {
        let pendingTasks = this.tasks.filter((el) => el.isCompleted == false);
        return pendingTasks;
    }
}
exports.taslManager = taslManager;
