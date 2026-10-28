// import type { TaskStatus } from "../../types"
import type { Task, TaskListProps, TaskStatus } from "../../types"
import TaskItem from "../TaskItem/TaskItem"
import type { TaskItemProps } from "../../types"
import { useState } from "react"
export default function TaskList(props: TaskListProps) {

   
    return (<ul>
        {props.tasks.map((task) => (
            <TaskItem key={task.id} task={task} onStatusChange={props.onStatusChange} onDelete={props.onDelete} />
        ))}


    </ul>)
}