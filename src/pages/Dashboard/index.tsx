import React from "react";
import { useContext } from "react";
import { UserContext } from "../../providers/user.Context";
import Header from "../../components/header";
import Main from "../../components/Main";
import { AppStyled } from "./style";

function Dashboard() {
  const {} = useContext(UserContext);

  return (
    <AppStyled>
      <Header />
      <Main />
    </AppStyled>
  );
}

export default Dashboard;
