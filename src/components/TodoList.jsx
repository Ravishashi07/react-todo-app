import TodoCard from "./TodoCard";

const TodoList = (props) => {
  const { todos } = props;

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex} completed={todo.completed} >
            {todo.text}
          </TodoCard>
        );
      })}
    </ul>
  );
};

export default TodoList;
