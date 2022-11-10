import React from "react";
import { useState } from "react";

export default function GeneratedTodo({deleteFunction, todo, checkedBox}){

    let [change, changeState] = useState(todo.completed);

    return(
        <>  
            <span className="span-checkbox">
                <input type="checkbox" className="button checkbox" onChange={() => checkedBox(todo, changeState)} checked={change}/>
            </span>
            <p>{todo.text}</p>
            <button className="button cross" onClick={(e) => deleteFunction(todo.id)}></button>
        </>
    )
}