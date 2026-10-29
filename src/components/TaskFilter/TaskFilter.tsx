import { useState } from "react";
import type { TaskFilterProps } from "../../types";

export default function TaskFilter(filter:TaskFilterProps){
    const [filters,setFilters]=useState();
    
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
    return(<div className="border-2 border-white p-10">
        <select className="border-2 rounded-md p-2 bg-black text-white" onChange={(e)=>handleChange('status',e.target.value)}>
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In-Progress</option>
            <option value="completed">Completed</option>
        </select>
        <select className="border-2 rounded-md p-2 bg-black text-white" onChange={(e)=>handleChange('priority',e.target.value)}>
            <option default-value="All Priorities">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>

    </div>)
}