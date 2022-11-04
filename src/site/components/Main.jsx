import React, {useState} from "react";
import { useEffect } from "react";
import GeneratedTodo from "./GeneratedTodo";

export default function Main(){
    let [arr, change] = useState([]);

    let [lenghtArray, changeLength] = useState(0);
    useEffect(() =>{
        changeLength(arr.length);
        console.log(arr);
    },[arr])

    
    function removeDiv(e){
        console.log(e);
        console.log(arr);
        change(arr.filter(item => item.name !== e.name));
    }

    function task(){
        if(document.querySelector(".main__form input").value !== ''){
            change([...arr,<GeneratedTodo/>]);
        }
    }
    
    return(
        <main>
            <div className="border content-main">
                <form className="main__form" onSubmit={(e) => e.preventDefault()}>
                    <button type="button" onClick={() => task()} className="button"></button>
                    <input type="text" onKeyDown={(e) => {
                        if(e.key === "Enter"){
                            task();
                        }

                    }} placeholder="Create a new todo..."/>
                </form>

                <div className="items-content">
                    {arr.map((todo, id) =>{
                        console.log("entrou");
                        
                        console.log(arr)
                        return(
                            <GeneratedTodo deleteFunction={removeDiv} keyGive={Math.random()} nameGive={Math.random()}/>
                        );
                    })}
                    <div className="items__info items-color">
                        <p>{lenghtArray} items left</p>
                        <p>Clear Completed</p>
                    </div>

                    <div className="selection__items">
                        <button type="button">All</button>
                        <button type="button">Active</button>
                        <button type="button">Completed</button>
                    </div>
                </div>
                
            </div>
        </main>
    );
}