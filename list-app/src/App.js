import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useState, useEffect } from "react";
import Todo from "./Todo";
import { db } from "./firbase";
import {
  query,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2FB0ED] to-[#8F00FF]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-violet-400 text-slate-100`,
  count: `text-center p-2 mt-2`,
  clearBtn: `border p-4 ml-2 bg-violet-400 text-slate-100 rounded items-center`,
  btnContainer: `flex justify-center`,
};

function App() {
  const [list, setList] = useState([]);
  const [inputText, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  //create todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (inputText === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todo"), {
      text: inputText,
      completed: false,
    });
    setInput("");
  };

  //read todo in firebase
  useEffect(() => {
    const q = query(collection(db, "todo"));
    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      let todoArr = [];
      querySnapshot.forEach((doc) => {
        todoArr.push({ ...doc.data(), id: doc.id });
      });
      setList(todoArr);
    });
    return () => unsuscribe();
  }, []);

  // update todo infirebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todo", todo.id), {
      completed: !todo.completed,
    });
  };

  // delete todo in firebase
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todo", id));
  };

  //edit the todo
  // const editTodo = async (todo) => {
  //   await updateDoc(doc(db, "todo", todo.id), {
  //     text: inputText,
  //     completed: false,
  //   });
  // };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input
            value={inputText}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type='text'
            placeholder='Add Todo'
            className={style.input}
          />
          <button className={style.button}>
            <AiOutlinePlus />
          </button>
        </form>
        <ul>
          {list.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              // editTodo={editTodo}
            />
          ))}
        </ul>
        <div className={style.btnContainer}>
          <button className={style.clearBtn}>Clear Items</button>
        </div>
        <p
          className={style.count}
        >{`You have ${list.length} list items to complete`}</p>
      </div>
    </div>
  );
}

export default App;
