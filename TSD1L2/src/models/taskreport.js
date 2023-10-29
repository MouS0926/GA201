"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskReport = void 0;
class taskReport {
    constructor(taskManager) {
        this.taskManager = taskManager;
    }
    getTaskReport() {
        const completedTasks = this.taskManager.getCompletedTask();
        const pendingTasks = this.taskManager.getPendingtasks();
        const tasksDueToday = this.taskManager.getdueTasktoday();
        const overdueTasks = this.taskManager.getOverdueTasks();
        const report = `
        Task Report:
        -------------
        - Completed Tasks: ${completedTasks.length}
        - Pending Tasks: ${pendingTasks.length}
        - Tasks Due Today: ${tasksDueToday.length}
        - Overdue Tasks: ${overdueTasks.length}
        `;
        console.log(report);
    }
}
exports.taskReport = taskReport;
