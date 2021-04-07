import React from "react";
import { useTheme } from "../components/Context";
import Header from "../components/Header";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <Header />
    </div>
  );
};

export default Home;
