import { RiTodoFill, RiDeleteBack2Line, RiCheckFill } from "react-icons/ri";
import styles from "./Todo.module.css";
import Button from "../Button/Button";

const Todo = ({ todo, deleteTodo, toggleToDo }) => {
  return (
    <li className={`${styles.todo} ${todo.isDone ? styles.todoDone : ""}`}>
      <span>
        <RiTodoFill />
        {todo.text}
      </span>

      <span>
        <Button
          onClick={() => toggleToDo(todo.id)}
          title="Done"
        >
          <RiCheckFill />
        </Button>
        <Button
          onClick={() => deleteTodo(todo.id)}
          title="Delete"
        >
          <RiDeleteBack2Line />
        </Button>
      </span>
    </li>
  );
};

export default Todo;
