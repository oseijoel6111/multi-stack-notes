import { createContext, useContext } from "react"
import TaskContext from "../context/TaskContext"

export default function TaskDropDown({ status, id }) {
    const tasks = useContext(TaskContext);

    const updateTaskStatus = (e)=>{
        tasks.filter((task,index)=>{
            if(task.title === e.target.value){
            let currentStatus = task.status === 'progress' ? 'completed' : 'progress'
            task['status'] = currentStatus
            tasks.splice(index, index);
            createContext(tasks);
            console.log(tasks);
            }
        })
    }
    return (
        <>
            {status === 'completed' &&
                <button value={id} onClick={updateTaskStatus} className="note-business badge-group-item badge-business dropdown-item position-relative category-business text-success">
                    <i className="mdi mdi-checkbox-blank-circle-outline mr-1"></i>progress
                </button>
            }
            {status === 'progress' &&
                <button value={id} onClick={updateTaskStatus} className="note-social badge-group-item badge-social dropdown-item position-relative category-social text-info">
                    <i className="mdi mdi-checkbox-blank-circle-outline mr-1"></i>
                    Completed
                </button>
            }
        </>
    )
}