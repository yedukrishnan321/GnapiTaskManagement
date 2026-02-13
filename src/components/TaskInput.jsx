import React from "react";

function TaskInput({addTask,input,setInput}) {
    //const [input,setInput] = React.useState(""); 

    
    return (
        <div className="input-group">
            <input
            type="text"
            value={input}
            placeholder="New Task..."
            onChange={(e)=> setInput(e.target.value)}
            />

            <button id="addBtn" onClick={()=> addTask(input)}>
                Add
            </button>
        </div>
    );
}

export default TaskInput;