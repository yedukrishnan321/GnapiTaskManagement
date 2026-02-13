import './App.css'
import TaskInput from'./components/TaskInput'
import Filter from './components/Filter'
import TaskList from './components/TaskList'
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [input,setInput] = useState("");
  const [filter, setFilter] = useState("all");


  const addTask = (input) => {
    if(input.trim()==="") {
      alert("Enter a task")
      return;
    }
    const item ={
          id:list.length+1,
          text: input,
          completed : false,
        };
    
    setList(pre => [...pre, item]);
    setInput("");
        

    };

    const toggleTask =(id) => {
      setList(list.map(t=> {
        if(t.id=== id) {
          return {
            ...t,
            completed: !t.completed
          }
        } else {
          return t;
        }
      }))
    }

    const deleteTask = (id)=>{
      setList(
        list.filter(
          (t) => (t.id !== id)
      )
    )
    }


  const filteredList = list.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "notCompleted") return !task.completed;
    return true; // "all"
});

  return (
    <>
      <div className='container'>
          <div className='app'>
              <h2>Task Management</h2>
              
              <TaskInput addTask= {addTask}
              input={input}
              setInput={setInput}
              />
              <Filter
              filter={filter}
              setFilter={setFilter}
               />
          </div>

          <div className='listcontainer'>
              <TaskList list={filteredList}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
              />
          </div>

      </div>
    </>
  )
}

export default App
