const TodoCard = (props) => {
  const {
    children,
    handleDeleteTodos,
    index,
    handleEditTodos,
    handleToggleComplete,
    completed,
  } = props;
  return (
    <li className={`todoItem ${completed?"completed":""}`}>
      <div className="checkboxAndText">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={completed}
          onChange={() => {
            handleToggleComplete(index);
          }}
        />

        <p className={`todo-text ${completed ? "completed" : ""}`}>
          {children}
        </p>
      </div>

      <div className="actionsContainer">
        <button
          onClick={() => {
            handleEditTodos(index);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>

        <button
          onClick={() => {
            handleDeleteTodos(index);
          }}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
};
export default TodoCard;
