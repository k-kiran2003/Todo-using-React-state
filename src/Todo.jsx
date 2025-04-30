import { use, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function Todo() {
    const [Todo, setTodo] = useState([{ Task: "sample task", id: uuidv4(),markDone : false }]);
    const [newTask, setnewTask] = useState("")
    let addTask = () => {
        setTodo((prevTask) => {
            return [...prevTask, { Task: newTask, id: uuidv4(),markDone:false }]
        });
        setnewTask("");
        console.log("task added")
    }

    function newTaskValue(event) {
        setnewTask(event.target.value);
    };
    let deleteTask = (id) => {
        setTodo((prevTodos) =>
            prevTodos.filter((task) => task.id !== id)
        );
    };
    let uppercaseAll = () => {
        setTodo((prevTodo) => (
            prevTodo.map((Todo) => {
                return {
                    ...Todo,
                    Task: Todo.Task.toUpperCase()
                }
            })

        ))
    };
    //done
    let markDone = (id)=>{
        setTodo((prevTodo)=>(
            prevTodo.map((todo)=>{
                if( todo.id === id) {
     return{ ...todo, markDone: todo.markDone = true}
                }
                else {
                    return todo;
                }
            })

             
        ))
    }

    return (

        <>
            <h2> Using React State</h2>
            <div className="border border-success p-5 m-3">
                <h1 style={{ color: "green" }}>What To Do today ?</h1>
                <input type="text" placeholder="write a task" value={newTask} onChange={newTaskValue}></input><br></br> <br></br>
                <button className="btn btn-success" onClick={addTask}>Add</button>
                <hr></hr>

                <ol>
                    {
                        Todo.map((Todo) => (
                            <li 
                            style={{textDecoration:Todo.markDone?"line-through":"none",
                                color: Todo.markDone? "grey" :"black"
                            }}
                            key={Todo.id}> <b>{Todo.Task}</b><button className="btn btn-danger m-2" onClick={() => deleteTask(Todo.id)}>Delete</button> <button onClick={ ()=> markDone(Todo.id)} className="btn btn-success m-2">Completed</button> </li>
                        )
                        )
                    }
                </ol>
                <button className="btn btn-success m-2" onClick={uppercaseAll}> UPPERCASE</button>
            </div>
        </>
    )
}