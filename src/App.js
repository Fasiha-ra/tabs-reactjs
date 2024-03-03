import React from "react";
import { GlobalStyles } from "./Global.styles";
import Header from "./Components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
    </>
  );
};

export default App;
