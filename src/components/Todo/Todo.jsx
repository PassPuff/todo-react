import styles from "./Todo.module.css";

const Todo = ({ todo, index, deleteTodo }) => {
  return (
    <li
      className={styles.todo}
      onDoubleClick={() => deleteTodo(index)}
    >
      {todo}
    </li>
  );
};

export default Todo;
