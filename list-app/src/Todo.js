import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 captilize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 captilize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  buttonContain: `cursor-pointer flex items-center`,
  editBtn: `cursor-pointer flex items-center mr-2`,
};

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type='checkbox'
          checked={todo.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={todo.completed ? style.textComplete : style.text}
        >
          {todo.text}
        </p>
      </div>
      <div className={style.buttonContain}>
        <button className={style.editBtn}>{<BiEdit />}</button>
        <button onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
      </div>
    </li>
  );
};

export default Todo;
