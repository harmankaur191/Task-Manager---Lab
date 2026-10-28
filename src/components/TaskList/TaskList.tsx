// import type { TaskStatus } from "../../types"
import type { Task, TaskListProps } from "../../types"
import TaskItem from "../TaskItem/TaskItem"
import type { TaskItemProps } from "../../types"
import { useState} from "react"
export default function TaskList(){
   
    
    const task1: Task={ id:'1',title:"Task 1", description:'Description 1', status:'pending', priority:'medium',dueDate:'10/29/2026'}
     const [task, setTask]=useState(task1)
    
    const taskItemProps: TaskItemProps={ task:task1 }
       return(<ul>
        <TaskItem {...taskItemProps}/>
    </ul>)
}