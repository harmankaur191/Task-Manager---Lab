import type { TaskItemProps, TaskStatus } from "../../types";

export default function TaskItem(props: TaskItemProps) {
    const style = " border-1 border-white-900 text-white p-8 flex flex w-full gap-10"
    return (
        <li className={style}>
            <section className="border-white-900 border-4 justify-start">
                {props.task.title}<br />
                {props.task.description}<br />
                Priority:  {props.task.priority}<br />
                Due Date: {props.task.dueDate}
            </section>
            <section className="bg-black text-white gap-10">
                <select className="bg-black text-white" value={props.task.status} onChange={(e) => {
                    const newStatus = e.target.value as TaskStatus;
                    props.onStatusChange(props.task.id, newStatus);

                }}>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In-Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <button>Delete</button>
            </section>
        </li>
    )
}