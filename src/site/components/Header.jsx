
function Header({changeFunction}){

    return(
        <header className="header">
            <div className="header__div border">
                <h1>Todo</h1>
                <button type="button" onClick={() => changeFunction()}>
                    <img src="/images/icon-moon.svg" alt="Change theme" className="img-theme"/>
                </button>
            </div>
        </header>
    );
}

export default Header;