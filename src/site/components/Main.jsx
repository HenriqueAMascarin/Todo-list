import React, { useEffect } from "react";
import { useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

function Main(){
    let generated = null;
    let arr2 = [];
    function createDiv(){
        generated = (
            <div key={Math.random()} className="task-div">
            <input type="checkbox" className="button"/>
            <p>{document.querySelector(".main__form input").value}</p>
            <button className="button cross"></button>
            </div>
        )
        arr2.unshift(generated);
        console.log(arr2);
        change(arr2);
    }
    
    const [arr, change] = useState([]);

    // function task(){
        
    //     createDiv();
    //     change([generated]);
    //     console.log(arr)
    // }
    function task(){
        createDiv();
        

    }
    
        
    return(
        <main>
            <div className="border content-main">
                <form className="main__form">
                    <button type="button" onClick={() => {
                        task()
                    } } className="button"></button>
                    <input type="text" placeholder="Create a new todo..."/>
                </form>

                <div className="items-content">
                    {arr}
                    <div className="items__info items-color">
                        <p>{} items left</p>
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

export default Main;