import React from "react";
import DropFileInput from "./components/DropFileInput";
import "./App.css";
import Panellum from "./components/Panellum/Panellum";

function App() {
  const onFileChange = (files) => {
    console.log(files);
  };

  return (
    <div className="App">
      {/* <div className="App-list">
        <div className="box">
          <DropFileInput onFileChange={(files) => onFileChange(files)} />
        </div>
        <button className="App-submit">Submit</button>
      </div> */}
      <Panellum />
    </div>
  );
}

export default App;
