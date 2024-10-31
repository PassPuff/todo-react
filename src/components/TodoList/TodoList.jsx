import Todo from "../Todo/Todo";
import styles from "./Todo.module.css";

const TodoList = ({ todos }) => {
  return (
    <>
      {todos.length > 0 ? (
        <ul className={styles.list}>
          {todos.map((todo, key) => (
            <Todo
              key={key}
              todo={todo}
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
