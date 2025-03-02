import { TaskItem } from "./TaskItem";


export function TaskList({tasks = [], removeTask, updateTask}) {
    console.log("Tareas recibidas en TaskList: ", tasks)

    return (
     
        <ul>
            {/* Itera sobre la lista de tareas y renderiza cada una */}
            {tasks.map((task) => (
                <TaskItem 
                key={task.id} 
                task={task} 
                removeTask={removeTask} 
                updateTask={updateTask}
                />
            ))
            }
        </ul>
      
    )
  
}
