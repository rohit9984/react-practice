// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <input type="text"
//       placeholder="Enter Your Task"
//       value={task}

      
//       />

//       <button>Add</button>

//       <ul>
//         <li>
//           <button>Delete</button>


//         </li>

        
//       </ul>








//       {/* <table border={1} style={{}}>
//         <colgroup>
//           <col />
//           <col />
//           <col />
//         </colgroup>
//         <thead>
//           <section>Todo List</section>
//           <tr>
//             <td>Day</td>
//             <td>Time</td>
//             <td>Work</td>
//             <td colSpan={2}>Function</td>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Sunday</td>
//             <td>6:13</td>
//             <td>todo List</td>
//             <button>Update</button>
//             <button>Delete</button>
//           </tr>
//           <tr>
//             <td>Sunday</td>
//             <td>6:13</td>
//             <td>todo List</td>
//             <button>Update</button>
//             <button>Delete</button>
//           </tr>
//           <tr>
//             <td>Sunday</td>
//             <td>6:13</td>
//             <td>todo List</td>
//             <button>Update</button>
//             <button>Delete</button>
//           </tr>
//           <tr>
//             <td>Sunday</td>
//             <td>6:13</td>
//             <td>todo List</td>
//             <button>Update</button>
//             <button>Delete</button>
//           </tr>
//         </tbody>

//         <tfoot>
//           <tr>
//             <td colSpan={2}>
//               <button>Add Task</button>
//             </td>
//             <td></td>
//           </tr>
//         </tfoot>
//       </table> */}


//     </div>
//   );
// }

// export default App;

import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add todo
  const addTodo = () => {
    if (task.trim() === "") return;

    setTodos([...todos, task]);
    setTask("");
  };

  // Delete todo
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}

            <button onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;