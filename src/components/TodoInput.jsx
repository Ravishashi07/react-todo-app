const TodoInput = (props) => {
  const { handleAddTodos, todoValue, setTodoValue, inputRef } = props;

    

  return (
    <header>
      <input
        ref={inputRef}
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodos(todoValue);
            setTodoValue("");
          }
        }}
        type="text"
        placeholder="Enter todo..."
      />

      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
};
export default TodoInput;
