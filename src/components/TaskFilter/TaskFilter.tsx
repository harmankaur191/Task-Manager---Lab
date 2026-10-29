import { useState } from "react";
import type { TaskFilterProps } from "../../types";

export default function TaskFilter(filter: TaskFilterProps) {
    const [filters, setFilters] = useState();

    const handleChange = (key: 'status' | 'priority', value: string) => {
        const newValue = value === "all" ? undefined : value;

        // Create the updated filter object safely using the spread operator (...)
        const updatedFilters = {
            ...filters,
            [key]: newValue
        };

        setFilters(updatedFilters);
        filter.onFilterChange(updatedFilters);
    };
    return (<div className="p-10 flex flex gap-5">
        <section className="flex flex-col">
            <label className="text-gray-700 text-xl font-semibold">Status</label>
            <select className="bg-gray-700 rounded-md p-2 bg-black text-white" onChange={(e) => handleChange('status', e.target.value)}>
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In-Progress</option>
                <option value="completed">Completed</option>
            </select>
        </section>
        <section className="flex flex-col">
            <label className="text-gray-700 text-xl font-semibold">Priority</label>
            <select className="bg-gray-700 rounded-md p-2 bg-black text-white" onChange={(e) => handleChange('priority', e.target.value)}>
                <option value="all">All Priorities</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
        </section>


    </div>)
}