import { TaskItem } from "./TaskItem";


export function TaskList({tasks = [], removeTask}) {
    console.log("Tareas recibidas en TaskList: ", tasks)

    return (
     
        <ul>
            {/* Itera sobre la lista de tareas y renderiza cada una */}
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} removeTask={removeTask}/>
            ))
            }
        </ul>
      
    )
  
}
