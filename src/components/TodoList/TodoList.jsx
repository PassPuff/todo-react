import Todo from "../Todo/Todo";
import styles from "./Todo.module.css";

const TodoList = ({ todos, deleteTodo, toggleToDo }) => {
  return (
    <>
      {todos.length > 0 ? (
        <ul className={styles.list}>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleToDo={toggleToDo}
            />
          ))}
        </ul>
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </>
  );
};

export default TodoList;
