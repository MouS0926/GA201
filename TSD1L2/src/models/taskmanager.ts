import { Task } from "./task";

export class taskManager{
    tasks:Task[]=[]

    //adding task
    addTask(task:Task){
        this.tasks.push(task)
    }
    updateTask(taskId:number,title: string, description: string, dueDate: Date){
        let task=this.tasks.find((el)=>el.taskId==taskId)
        if(task){
            task.updateTask(title, description, dueDate)
        }
        else{
            console.log(`task with ${taskId} not found`);
            
        }
    }

    deleteTask(taskId:number){
        let deletedtask=this.tasks.find((el)=>el.taskId==taskId)
        if(deletedtask){
            this.tasks.filter((el)=>el.taskId!=taskId)
        }
        else{
            console.log(`task with ${taskId} not found`);
            
        }
    }

    getCompletedTask(){
        
        let completedTask=this.tasks.filter((el)=>el.isCompleted==true)
        return completedTask
    }

    getPendingtasks(){
        let pendingTasks=this.tasks.filter((el)=>el.isCompleted==false)
        return pendingTasks
    }

    getdueTasktoday(){
        const today=new Date()
        return this.tasks.filter((el)=>el.dueDate.toDateString()==today.toDateString())
    }
    getOverdueTasks(){
       const today=new Date()
       return this.tasks.filter((el)=>el.dueDate<today && !el.isCompleted) 
    }

}
   