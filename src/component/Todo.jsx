import React, { useEffect, useState } from "react";
import Button from "./Button";
import TodoRender from "./todosinglepage/TodoRender";

const getLocalStorage = () => {
  const items = localStorage.getItem("todo");
  if (items) {
    return JSON.parse(localStorage.getItem("todo"));
  } else {
    return [];
  }
};
const Todo = () => {
  const [todolist, settodolist] = useState(getLocalStorage());
  const [text, settext] = useState("");
  const [togglehideshow, settogglehideshow] = useState(true);
  const hanldeEdit = (text) => {
    settext(text);
  };
  const hanldedelete = (id) => {
    let afterdele = todolist.filter((item) => item._id !== id);
    settodolist(afterdele);
  };
  const handleAddToDo = () => {
    if (text === "") {
      alert("Please enter a value");
    } else {
      let todo = { _id: Math.trunc(Math.random() * 1e9), title: text };
      settodolist([...todolist, todo]);
      settext("");
    }
  };
  const handleupdatoe = (id) => {
    const arry = [...todolist];
    let singlTodo = arry.filter((item) => item._id === id);
    singlTodo[0].title = text;

    let index = arry.findIndex((i) => i._id === id);
    arry[index] = singlTodo[0];

    settodolist(arry);
    settext("");
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <>
      <div className="toto--list">
        <input
          type="text"
          placeholder="add to do "
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
          className="input"
        />
        {/* <button className="custom-btn">Add To Do</button> */}
        <Button name="Add To Do" action={handleAddToDo} />
      </div>
      <div className="todo-content-render">
        {todolist.length >= 1 ? (
          todolist.map((item, index) => {
            return (
              <TodoRender
                key={index}
                item={item}
                hanldedelete={hanldedelete}
                hanldeEdit={hanldeEdit}
                handleupdatoe={handleupdatoe}
                togglehideshow={togglehideshow}
              />
            );
          })
        ) : (
          <h2>No list</h2>
        )}
      </div>
    </>
  );
};

export default Todo;
