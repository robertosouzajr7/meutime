import React from "react";
import { UserContext } from "../../providers/user.Context";
import { useContext } from "react";
import { iChildren, iStatistc, iTeam, iTeams } from "../../interfaces";

function Table({ children }: iChildren, data: iStatistc) {
  const { showTable } = useContext(UserContext);

  return <>{data.biggest.goals}</>;
}

export default Table;
