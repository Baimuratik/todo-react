import { useState } from "react";
import Addtodo from "./components/Addtodo";
import EditTodo from "./components/EditTodo";
import Todolist from "./components/Todolist";

function App() {
  const [todos, setTodo] = useState([]);

  const [forEditVal, setForEditVal] = useState(null);

  console.log(todos);

  function addTodo(todo) {
    setTodo([...todos, todo]);
  }

  function deleteTodo(id) {
    const filtered = todos.filter((item) => item.id != id);

    setTodo(filtered);
  }

  function editTodo(editedTodo) {
    const newArr = todos.map((item) => {
      if ((item.id = editedTodo.id)) {
        return editedTodo;
      }
    });
    setTodo(newArr);
  }
  return (
    <div>
      <Addtodo addTodo={addTodo} />
      {forEditVal ? (
        <EditTodo
          editTodo={editTodo}
          setForEditVal={setForEditVal}
          forEditVal={forEditVal}
        />
      ) : null}
      <Todolist
        setForEditVal={setForEditVal}
        todos={todos}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
