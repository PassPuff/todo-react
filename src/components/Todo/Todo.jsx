import { RiTodoFill } from "react-icons/ri";
import styles from "./Todo.module.css";

const Todo = ({ todo, deleteTodo }) => {
  return (
    <li
      className={styles.todo}
      onClick={() => deleteTodo(todo.id)}
    >
      <RiTodoFill />
      {todo.text}
    </li>
  );
};

export default Todo;
