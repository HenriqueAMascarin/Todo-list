import { useEffect } from "react";

function Main(){

    return(
        <main>
            <div className="border content-main">
                <form className="main__form">
                    <button type="button" className="button"></button>
                    <input type="text" placeholder="Create a new todo..."/>
                </form>

                <div className="items-content">

                    <div className="task-div">
                        <input type="checkbox" className="button"/>
                        <p>{change}</p>
                        <button className="button cross"></button>
                    </div>

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