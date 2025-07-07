import { useState, useEffect, useRef} from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const inputRef = useRef(null);

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodo) {
    if (!newTodo.trim()) return;
    const newTodoList = [...todos,{text: newTodo, completed: false}];
    persistData(newTodoList);
    setTodos(newTodoList);
  }
  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }
  function handleEditTodos(index) {
    const valueToBeEdited = todos[index].text;
    setTodoValue(valueToBeEdited);
    handleDeleteTodos(index);
    inputRef.current?.focus();
  }
  function handleToggleComplete(index){
    const newTodoList=[...todos];
    newTodoList[index].completed=!newTodoList[index].completed;
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  useEffect(() => {
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) return;

    const parsed = JSON.parse(localTodos).todos;
    if(Array.isArray(parsed)){
      setTodos(parsed);
    }
  }, []);

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
        inputRef={inputRef}
      />
      <TodoList
        handleEditTodos={handleEditTodos}
        todos={todos}
        handleDeleteTodos={handleDeleteTodos}
        handleToggleComplete={handleToggleComplete}
      />
    </>
  );
};

export default App;
