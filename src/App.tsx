import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <GlobalStyle />
    </div>
  );
}

export default App;
