import React, {useState} from "react";
import { useEffect } from "react";
import GeneratedTodo from "./GeneratedTodo";

export default function Main(){
    let [arr, changeArr] = useState([]);
    let [newArr, changeNew] = useState([]);
    let [id, changeId] = useState(0);

    useEffect(()=>{
        changeNew([...arr]);
    }, [arr]);

    function removeDiv(id){
        changeNew(newArr.filter(item => item.id !== id));
        changeArr(arr.filter(item => item.id !== id));
    }

    function checkedBox(todo,change){
        todo.completed = !todo.completed;
        change(todo.completed);
    }

    function activatedLink(calledButton){
        const buttons = document.querySelectorAll(".selection__items button");
        buttons.forEach(element => {
            element.classList.remove("active");
        })
        calledButton.classList.add("active");
    }

    function changeNewArr(){
        changeNew(newArr);
    }

    function filterNotCompleted(button){
        activatedLink(button);
        newArr = arr.filter(elements => !elements.completed);
        changeNewArr();
    }

    function filterCompleted(button){
        activatedLink(button);
        newArr = arr.filter(elements => elements.completed);
        changeNewArr();
    }

    function filterAll(button){
        activatedLink(button);
        newArr = arr.filter(elements => elements);
        changeNewArr();
    }

    function clearComplete(){
        newArr = arr.filter(elements => !elements.completed)
        changeNewArr();
        changeArr(newArr);
    }

    function task(){
        if(document.querySelector(".main__form input").value !== ''){
            let inputText = document.querySelector(".text-input");
            let checkedBox = document.querySelector(".main__form .checkbox");
            const todoObj = {text: inputText.value, id: id, completed: checkedBox.checked};
            changeId(++id);
            inputText.value = "";
            changeArr([...arr,todoObj]);
        }
    }
    
    return(
        <main>
            <div className="border content-main">
                <form className="main__form" onSubmit={(e) => e.preventDefault()}>
                    <span className="span-checkbox">
                        <input type="checkbox" className="button checkbox" aria-label="change the state of todo"/>
                    </span>
                    <input type="text" className="text-input" placeholder="Create a new todo..." onKeyDown={(e) => {
                        if(e.key === "Enter"){
                            task();
                        }
                    }}/>
                </form>

                <div className="items-content">

                    {newArr.map((todo) =>{
                        return(
                            <div className="task-div" key={todo.id}>
                                <GeneratedTodo deleteFunction={removeDiv} todo={todo} checkedBox={checkedBox}/>
                            </div>
                        );
                    })}
                    <div className="selection-box">
                        <div className="items__info">
                            <p>{newArr.length} items left</p>
                            <button className="selection-button" onClick={() => clearComplete()}>Clear Completed</button>
                        </div>
                        <div className="selection__items">
                            <button type="button" className="selection-button" onClick={(e) => filterAll(e.target)}>All</button>
                            <button type="button" className="selection-button" onClick={(e) => filterNotCompleted(e.target)}>Active</button>
                            <button type="button" className="selection-button" onClick={(e) => filterCompleted(e.target)}>Completed</button>
                        </div>
                    </div>

                    <p className="drag-text">Drag and drop to reorder list</p>
                    
                </div>
                
            </div>
        </main>
    );
}