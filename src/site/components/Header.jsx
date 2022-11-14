
function Header({changeFunction}){

    return(
        <header className="header">
            <div className="header__div border">
                <h1>Todo</h1>
                <button onClick={() => changeFunction()} aria-label="change theme">
                    <img src="/images/icon-moon.svg" alt="Change theme icon" className="img-theme"/>
                </button>
            </div>
        </header>
    );
}

export default Header;