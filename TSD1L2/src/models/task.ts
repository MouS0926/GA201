let taskIdCounter = 1; 

export class Task {
    taskId: number;
    title: string;
    description: string;
    dueDate: Date;
    isCompleted: boolean;

    constructor(title: string, description: string, dueDate: Date, isCompleted: boolean = false) {
        this.taskId = taskIdCounter++; 
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.isCompleted = isCompleted;
    }

    markComplete() {
        this.isCompleted = true;
    }

    updateTask(title: string, description: string, dueDate: Date) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }
}
