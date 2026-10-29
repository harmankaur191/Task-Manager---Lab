import type { TaskItemProps, TaskStatus } from "../../types";

export default function TaskItem(props: TaskItemProps) {
    const style = "text-white p-8 flex flex w-full gap-10"
    return (
        <li className={style}>
            <section className="justify-start">
                <h3>{props.task.title}</h3><br />
                <p>{props.task.description}</p><br />
               <p><label>Priority: </label>{props.task.priority}</p> <br />
                <p><label>Due Date:</label> {props.task.dueDate}</p>
            </section>
            <section className="bg-black text-white gap-10 justify-end">
                <select className="bg-black text-white" value={props.task.status} onChange={(e) => {
                    const newStatus = e.target.value as TaskStatus;
                    props.onStatusChange(props.task.id, newStatus);
                    console.log(newStatus)
                    console.log(props.task)

                }}>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In-Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <button onClick={()=>
                   props.onDelete(props.task.id)}
                >Delete</button>
            </section>
        </li>
    )
}