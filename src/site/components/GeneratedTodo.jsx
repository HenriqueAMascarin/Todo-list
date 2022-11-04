import React from "react";

export default function GeneratedTodo({deleteFunction,keyGive, nameGive}){
    return(
        <div key={keyGive} name={nameGive} className="task-div">
            <input type="checkbox" className="button"/>
            <p>{document.querySelector(".main__form input").value}</p>
            <button className="button cross" onClick={(e) => deleteFunction(e)}></button>
        </div>
    )
}