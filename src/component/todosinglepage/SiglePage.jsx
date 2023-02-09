"use client";

import { Inter } from "@next/font/google";
import styles from "./page.module.css";

import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [todo, setTodo] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [editbtn, seteditbtn] = useState(true);
  const [editbtn2, seteditbtn2] = useState(true);

  const handleAddToDo = () => {
    if (todoText !== "") {
      const newTodo = {
        _id: Math.trunc(Math.random() * 1e9),
        title: todoText,
      };
      setTodo([...todo, newTodo]);
      setTodoText("");
    } else {
      alert("please add a atleast 2 words");
    }
  };

  const handelEdit = (text) => {
    setTodoText(text);
    seteditbtn(false);
  };
  const savebtn = (id) => {
    seteditbtn(true);

    let arr = [...todo];
    let changedItem = arr.filter((item) => item._id === id);
    changedItem[0].title = todoText;

    let index = arr.findIndex((i) => i._id === id);
    // let afterupadte = [...arr];
    arr[index] = changedItem[0];
    setTodo(arr);
    setTodoText("");
  };

  const hanldeDelete = (id) => {
    let newiemafterdelete = todo.filter((el) => el._id !== id);
    setTodo(newiemafterdelete);
  };
  return (
    <main className={styles.main}>
      <h1>Todo Next JS</h1>
      <div className="toto--list">
        <input
          type="text"
          placeholder="add to do "
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          className="input"
        />
        <button className="custom-btn" onClick={handleAddToDo}>
          Add To Do
        </button>
      </div>
      <div className="todo-content-render">
        {todo.length >= 1 ? (
          todo.map((item, index) => {
            return (
              <div className="listing" key={index + 1}>
                <h4>
                  {item._id} : {item.title}
                </h4>
                {editbtn ? (
                  <button
                    className="custom-btn"
                    onClick={() => handelEdit(item.title)}
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    className="custom-btn savebtn"
                    onClick={() => savebtn(item._id)}
                  >
                    save
                  </button>
                )}

                <button
                  className="custom-btn"
                  onClick={() => {
                    hanldeDelete(item._id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })
        ) : (
          <h1>No To do</h1>
        )}
      </div>
    </main>
  );
}
