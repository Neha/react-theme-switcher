import './assets/styles/style.css';
import React, { useState } from "react";
import Home from "./Pages/Home";
import Context from "./components/Context";
import Toggle from "./components/Toggle";
import Footer from "./components/Footer";

const App = () => {
  const [text, setText] = useState("light");

  const clickHandler = () => {
    text === "light" ? setText("dark") : setText("light");
  };

  return (
    <div className={`app ${ text }`}>
      <Context.Provider value={text}>
      <Home />
      <Toggle themeChange={clickHandler} text={text} />
      <Footer />
      </Context.Provider>
      
    </div>
  );
};

export default App;
