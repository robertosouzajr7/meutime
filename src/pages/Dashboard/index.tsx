import React from "react";
import Header from "../../components/header";
import Main from "../../components/Main";
import { AppStyled } from "./style";

function Dashboard() {
  return (
    <AppStyled>
      <Header />
      <Main />
    </AppStyled>
  );
}

export default Dashboard;
