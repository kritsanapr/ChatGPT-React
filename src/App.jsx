import { useState } from "react";
import "./App.css";
import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";
import { arrayItems } from "./AIOptions";

function App() {
  const selectOption = (option) => {
    console.log(option);
  };

  return (
    <>
      <h1 className="heading">AI APP</h1>
      <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      <Translation />
    </>
  );
}

export default App;
