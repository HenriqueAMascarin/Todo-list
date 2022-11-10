import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import React, {useState} from 'react';

function App() {

  const [isTheme, changeTheme] = useState(false);

    function change(){
      changeTheme(!isTheme);
  }

  return (
    <div className={isTheme ? "App dark-theme" : "App"}>
      <Header changeFunction={change}/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
