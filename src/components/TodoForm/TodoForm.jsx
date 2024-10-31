import { useState } from "react";
import Button from "../Button/Button";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (text) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        placeholder="Enter new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" />
    </form>
  );
};

export default TodoForm;
