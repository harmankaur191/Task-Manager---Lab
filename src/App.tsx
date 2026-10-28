import { useState } from "react";
import TaskList from "./components/TaskList/TaskList";
import type { Task, TaskListProps } from "./types";
import type { TaskStatus } from "./types";
export default function App(){
 
  const style="bg-black"
  const taskArr:Task[]=[{ id:'1',title:"Task 1", description:'Description 1', status:'in-progress', priority:'medium',dueDate:'10/29/2026'},
    { id:'2',title:"Task 2", description:'Description 2', status:'pending', priority:'low',dueDate:'10/31/2026'},
    { id:'3',title:"Task 3", description:'Description 3', status:'completed', priority:'high',dueDate:'11/01/2026'},
  ]
   const [tasks,setTasks]=useState(taskArr)
 const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>                   
        task.id === taskId ? { ...task, status: newStatus }       
          : task                                
      )
    );
  };
  const handleDelete=(taskId:string)=>{
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }
  const taskListprops:TaskListProps={tasks:tasks, onStatusChange:handleStatusChange, onDelete:handleDelete}
  return(<div className={style}>
    <TaskList {...taskListprops}/>
  </div>)
}