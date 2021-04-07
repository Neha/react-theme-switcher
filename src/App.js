import "./assets/styles/style.css";
import React, { useState } from "react";
import { useTheme } from "./components/Context";
import Home from "./Pages/Home";
import Toggle from "./components/Toggle";
import Footer from "./components/Footer";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Home />
      <Toggle />
      <Footer />
    </div>
  );
};

export default App;
