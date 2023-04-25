import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import Todo from "./Todo";

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
  const [list, setList] = useState(["Learn React", "Practise on LeetCode"]);

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form className={style.form}>
          <input type='text' placeholder='Add Todo' className={style.input} />
          <button className={style.button}>
            <AiOutlinePlus />
          </button>
        </form>
        <ul>
          {list.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </ul>
        <div className={style.btnContainer}>
          <button className={style.clearBtn}>Clear Items</button>
        </div>
        <p className={style.count}>You have 2 items</p>
      </div>
    </div>
  );
}

export default App;
