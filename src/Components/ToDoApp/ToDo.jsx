import { useState } from "react";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function addTodo() {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-emerald-400">
      <div className="w-[500px]  bg-white rounded-lg shadow p-16">
        <h1 className="text-3xl text-gray-700 font-bold text-center mb-6">
          REACT TODO LIST ✅
        </h1>

        <div className="mb-8 flex">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Add todo"
            className="flex-grow border border-indigo-100 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={addTodo}
            className="bg-blue-500 px-4 py-2 text-white font-bold rounded-r-lg hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center border p-3 border-gray-200 rounded-lg bg-gray-100"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() =>
                  setTodos(
                    todos.map((t) =>
                      t.id === todo.id ? { ...t, completed: !t.completed } : t
                    )
                  )
                }
                className="mr-2 h-5 w-5 text-blue-600"
              />

              <span
                className={`flex-grow ${
                  todo.completed
                    ? "line-through text-gray-500"
                    : "text-gray-800"
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
                className=" text-white ml-2 bg-red-500 hover:bg-red-700 border-none p-2 rounded-lg"
              >
                DELETE
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
