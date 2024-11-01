import Button from "../Button/Button";
import { RiLoopLeftFill, RiDeleteBin2Fill } from "react-icons/ri";

const TodosActions = ({
  deleteTodos,
  deleteCompletedTodos,
  completedTodosCount,
}) => {
  return (
    <>
      <Button
        title="Reset"
        onClick={deleteTodos}
      >
        <RiLoopLeftFill />
      </Button>
      <Button
        title="Delete Completed"
        onClick={deleteCompletedTodos}
        disable={!completedTodosCount}
      >
        <RiDeleteBin2Fill />
      </Button>
    </>
  );
};

export default TodosActions;
