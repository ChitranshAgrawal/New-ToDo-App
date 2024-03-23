import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons';

export default function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const complete = false;

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {

        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    const deleteTask = index => {

        let updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
    }

    function moveTaskUp(index) {

        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {

        if (index < (tasks.length - 1)) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    

    // function upperCase(idx) {

    //     setTasks((tasks) => tasks.map((task) => 
    //         { if (task.idx == idx) {
    //             return task.toUpperCase();
    //         } else {
    //             return task;
    //         }
    //         }
    //     ));
    // }

    return (
        <div className="to-do-list">
            <h1>ToDo List</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    id="input"
                    value={newTask}
                    onChange={handleInputChange}>
                </input>
                <button className="add-btn" onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="del-btn" onClick={() => deleteTask(index)}><div><FontAwesomeIcon icon={faTrash} /> </div></button>
                        <button className="move-btn" onClick={() => moveTaskUp(index)}><div><FontAwesomeIcon icon={faHandPointUp} /> </div></button>
                        <button className="move-btn" onClick={() => moveTaskDown(index)}><div><FontAwesomeIcon icon={faHandPointDown} /> </div></button>
                        {/* <button className="move-btn" onClick={() => upperCase(index)}>Make Upper Case</button> */}
                        <input type="checkbox" id="check" onClick={() => changeStatus(index)} style={{color: "green"}}></input>
                    </li>
                )}
            </ol>

        </div>
    );

}



