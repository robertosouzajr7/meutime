import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import Dashboard from "./pages/Dashboard";
import { AppStyled } from "./pages/Dashboard/style";

function App() {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <GlobalStyle />
    </AppStyled>
  );
}

export default App;
