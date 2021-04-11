import React, { useContext } from "react";
import Header from "../components/Header";
import Context from "../components/Context";
import Button from "../components/Button";

const Home = () => {
  const theme = useContext(Context);

  return (
    <div className={theme}>
      <Header />
      <Button text="click" />
    </div>
  );
};

export default Home;
