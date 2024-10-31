import styles from "./Todo.module.css";

const Todo = ({ todo }) => {
  return <li className={styles.todo}>{todo}</li>;
};

export default Todo;
