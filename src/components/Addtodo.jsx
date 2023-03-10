import React, { useState } from "react";

function Addtodo(props) {
  const [value, setValue] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!value.trim()) return;
          const newTodo = {
            id: Date.now(),
            title: value,
          };
          props.addTodo(newTodo);
          setValue("");
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="New todo..."
          value={value}
        />
        <button>Add todo</button>
      </form>
    </div>
  );
}
export default Addtodo;
