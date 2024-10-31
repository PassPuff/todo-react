import { RiTodoFill, RiDeleteBack2Line, RiCheckFill } from "react-icons/ri";
import styles from "./Todo.module.css";

const Todo = ({ todo, deleteTodo, toggleToDo }) => {
  return (
    <li className={styles.todo}>
      <span>
        <RiTodoFill />
        {todo.text}
      </span>

      <span>
        <button onClick={() => toggleToDo(todo.id)}>
          <RiCheckFill />
        </button>
        <button onClick={() => deleteTodo(todo.id)}>
          <RiDeleteBack2Line />
        </button>
      </span>
    </li>
  );
};

export default Todo;
