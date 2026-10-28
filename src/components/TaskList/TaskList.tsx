// import type { TaskStatus } from "../../types"
import type { Task, TaskListProps, TaskStatus } from "../../types"
import TaskItem from "../TaskItem/TaskItem"
import type { TaskItemProps } from "../../types"
import { useState} from "react"
export default function TaskList(){
   
    
    const task1: Task={ id:'1',title:"Task 1", description:'Description 1', status:'in-progress', priority:'medium',dueDate:'10/29/2026'}
     const [task, setTask]=useState(task1)
    const handleChange=(taskId:string, newStatus:TaskStatus)=>{
     
       setTask((task)=>({...task, status:newStatus}))
       
    }
   const handleDelete = (taskId: string) => {
        setTask((prevTasks) => prevTasks.filter((t) => t.id !== taskId));
    };
    console.log(task)
    const taskItemProps: TaskItemProps={ task:task, onStatusChange:handleChange, onDelete:handleDelete }
       return(<ul>
        <TaskItem {...taskItemProps}/>
   
    </ul>)
}