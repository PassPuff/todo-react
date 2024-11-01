import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import "./components/TodoForm/TodoForm.module.css";
import TodosActions from "./components/TodoActions/TodosActions";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      id: uuidv4(),
      text: text,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const toggleToDoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : { ...todo }
      )
    );
  };

  const deleteTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((item) => !item.isDone));
  };

  const completedTodosCount = todos.filter((todo) => todo.isDone).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          completedTodosCount={!!completedTodosCount}
          deleteTodos={deleteTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleToDo={toggleToDoHandler}
      />
    </div>
  );
}

export default App;
