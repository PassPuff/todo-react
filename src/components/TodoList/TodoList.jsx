import Todo from "../Todo/Todo";
import styles from "./Todo.module.css";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <>
      {todos.length > 0 ? (
        <ul className={styles.list}>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      ) : (
        "Todo list is empty"
      )}
    </>
  );
};

export default TodoList;
