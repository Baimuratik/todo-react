import React from "react";
function Todolist(props) {
  return (
    <div>
      <h1>Todo list</h1>

      <ul>
        {props.todos.length > 0 ? (
          props.todos.map((item) => {
            return (
              <li key={item.id}>
                {item.title}{" "}
                <button onClick={() => props.deleteTodo(item.id)}>
                  delete
                </button>{" "}
                <button onClick={() => props.setForEditVal(item)}>edit</button>
              </li>
            );
          })
        ) : (
          <h5>Тудушек нет</h5>
        )}
      </ul>
    </div>
  );
}

export default Todolist;
