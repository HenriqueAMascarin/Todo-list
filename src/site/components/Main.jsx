import React, { useEffect } from "react";

function Main(){
    let arr = [];
    let generated = 0;

    function createDiv(){
        generated = (
            <div className="task-div">
            <input type="checkbox" className="button"/>
            <p>{document.querySelector(".main__form input").value}</p>
            <button className="button cross"></button>
            </div>
        )
    }

    function task(){
        createDiv();
        arr.push(generated);
        console.log(arr);
    }
    

    return(
        <main>
            <div className="border content-main">
                <form className="main__form">
                    <button type="button" onClick={() => task()} className="button"></button>
                    <input type="text" placeholder="Create a new todo..."/>
                </form>

                <div className="items-content">

                    {useEffect(() => {
                        <h1>oi</h1>
                    },arr)}

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