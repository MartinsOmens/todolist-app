import { useState } from "react";

export const UserToDo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function addTodo() {
    if (input.trim()) {
      setTodos([...todos, {text: input, completed: false}]);
    }
    setInput("");
  }

  function deleteTodo(indexToDelete){
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  }

  function toggleTodo(index) {
  setTodos(
    todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    )
  );
}


  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-500">
      <div className="bg-white w-[500px] p-16 rounded-lg shadow">
        <h1 className="text-center text-3xl text-gray-500 font-bold mb-6">
          REACT TODO LIST ✅
        </h1>
        <div className="mb-8 flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add Todo"
            className="flex-grow border border-indigo-100 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button onClick={addTodo}
            className="bg-blue-500 px-3 py-2 text-white font-bold rounded-r-lg">
            ADD
          </button>
        </div>

        <ul className="space-y-4">
          {todos.map((todo, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg flex items-center">

            <input type="checkbox" 
            checked = {todo.completed}
            onChange={() => toggleTodo(index)}
            className="mr-4 w-5 h-5 accent-blue-600"/>
            
            <span 
            className={`flex-grow ${todo.completed ? "line-through text-gray-400": "todo"}`}>
                {todo.text}
            </span>

            <button onClick={() => deleteTodo(index)} className="bg-red-500 p-2 rounded-lg text-white font-bold">DELETE</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
