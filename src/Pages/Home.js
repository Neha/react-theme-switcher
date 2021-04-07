import React, { useContext } from "react";
import Header from "../components/Header";
import Context from "../components/Context";

const Home = () => {
  const theme = useContext(Context);

  return (
    <div className={theme}>
      <Header />
    </div>
  );
};

export default Home;
