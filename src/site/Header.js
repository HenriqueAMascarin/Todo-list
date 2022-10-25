function Header(){
    return(
        <header className="header">
            <div className="header__div border">
                <h1>Todo</h1>
                <button type="button">
                    <img src="/images/icon-moon.svg" alt="Change theme"/>
                </button>
            </div>
        </header>
    );
}

export default Header;