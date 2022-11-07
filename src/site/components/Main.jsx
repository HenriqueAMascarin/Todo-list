import React, {useState} from "react";
import { useEffect } from "react";
import GeneratedTodo from "./GeneratedTodo";

export default function Main(){
    let [arr, changeArr] = useState([]);
    let [newArr, changeNew] = useState([]);
    let [id, changeId] = useState(0);

    
    useEffect(()=>{
        changeNew([...arr]);
        console.log(arr)
    }, [arr]);

    function removeDiv(id){
        changeArr(arr.filter(item => item.id !== id));
    }

    function checkedBox(todo){
        todo.completed = !todo.completed;
    }

    function filterNotCheck(){
        newArr = arr.filter(elements => !elements.completed);
        changeNew(newArr);
    }

    function filterCheck(){
        newArr = arr.filter(elements => elements.completed);
        changeNew(newArr);
    }

    function task(){
        if(document.querySelector(".main__form input").value !== ''){
            const todoObj = {text: document.querySelector(".main__form input").value, id: id, completed: false};
            changeId(++id);
            console.log(id)
            changeArr([...arr,todoObj]);
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

                    {newArr.map((todo) =>{
                        return(
                            <div className="task-div" key={todo.id}>
                                <GeneratedTodo deleteFunction={removeDiv} todo={todo} checkedBox={checkedBox}/>
                            </div>
                        );
                    })}

                    <div className="items__info items-color">
                        <p>{newArr.length} items left</p>
                        <button onClick={() => }>Clear Completed</button>
                    </div>

                    <div className="selection__items">
                        <button type="button" onClick={() => changeNew(arr)}>All</button>
                        <button type="button" onClick={() => filterNotCheck()}>Active</button>
                        <button type="button" onClick={() => filterCheck()}>Completed</button>
                    </div>
                </div>
                
            </div>
        </main>
    );
}