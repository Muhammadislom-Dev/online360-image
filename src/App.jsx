import React from "react";
import DropFileInput from "./components/DropFileInput";
import "./App.css";

function App() {
  const onFileChange = (files) => {
    console.log(files);
  };

  return (
    <div className="App">
      <div className="App-list">
        <div className="box">
          <DropFileInput onFileChange={(files) => onFileChange(files)} />
        </div>
      </div>
    </div>
  );
}

export default App;
