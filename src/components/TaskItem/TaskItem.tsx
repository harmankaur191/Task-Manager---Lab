import type { TaskItemProps, TaskStatus } from "../../types";

export default function TaskItem(props: TaskItemProps) {
    const style = "text-white p-8 flex flex w-full gap-5 border-1 border-gray-700 rounded-xl p-10"
    const priorityColor={
        low:"text-green-500",
        medium:"text-yellow-500",
        high:"text-red-500"
    }
    const statusColor={
        pending:"bg-yellow-200 text-yellow-800",
        "in-progress":"bg-blue-100 text-blue-700",
        completed:"bg-green-100 text-green-700"
    }
    return (
        <li className={style}>
            <section className="justify-start">
                <h1 className="text-2xl font-bold">{props.task.title}</h1><br />
                <p className="text-gray-700 font-semibold">{props.task.description}</p><br />
              <span className="flex flex gap-5"> <p className={priorityColor[props.task.priority]}><label>Priority: </label>{props.task.priority}</p> <br />
                <p className="text-gray-700 font-semibold"><label>Due Date:</label> {props.task.dueDate}</p>
                </span>
            </section>
            <section className="bg-black text-white gap-10 ">
                <select className={`${statusColor[props.task.status]}bg-white text-blue-700 p-1 rounded-sm`} value={props.task.status} onChange={(e) => {
                    const newStatus = e.target.value as TaskStatus;
                    props.onStatusChange(props.task.id, newStatus);
                    console.log(newStatus)
                    console.log(props.task)

                }}>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In-Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <button className="text-red-800" onClick={()=>
                   props.onDelete(props.task.id)}
                >Delete</button>
            </section>
        </li>
    )
}