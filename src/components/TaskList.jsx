
function TaskList({list,toggleTask,deleteTask}) {
    
    return (
        <ul id="taskList">
            {list.map(t=> <li key={t.id}>
                <input 
                    type="checkbox"
                    checked={t.completed}
                    onChange={() => toggleTask(t.id)}
                     />
                <span className={t.completed ? "task-completed" : "task-notcompleted"}>{t.text}</span>
                <button onClick={()=>deleteTask(t.id)}>Delete</button>
            </li>)}
        </ul>
    );
}
export default TaskList