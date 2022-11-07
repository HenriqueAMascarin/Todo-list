import React from "react";

export default function GeneratedTodo({deleteFunction, todo, checkedBox}){
    return(
        <>
            <input type="checkbox" className="button" onChange={() => checkedBox(todo)}/>
            <p>{todo.text}</p>
            <button className="button cross" onClick={(e) => deleteFunction(todo.id)}></button>
        </>
    )
}