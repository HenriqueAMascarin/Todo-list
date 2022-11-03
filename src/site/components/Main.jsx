import React, {useState} from "react";
import { useEffect } from "react";

export default function Main(){
    let generated = null;
    let [arr, change] = useState([]);

    function createDiv(){
        generated = (
            <div key={Math.random()} name={Math.random()} className="task-div">
            <input type="checkbox" className="button"/>
            <p>{document.querySelector(".main__form input").value}</p>
            <button className="button cross" onClick={(e) => removeElement(e.target.parentNode.getAttribute("name"))}></button>
            </div>
        )
    }

    let [lenghtArray, changeLength] = useState(0);
    useEffect(() =>{
        changeLength(arr.length);
        console.log(arr)
    },[arr])
    
    const removeElement = (e) => {
        console.log(e);
        change(arr.filter(item => item.name !== e))
    }

    function task(){
        if(document.querySelector(".main__form input").value !== ''){
            createDiv();
            change([...arr,generated]);
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
                    {arr}
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