import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/user.Context";
import { CardStyled } from "../../styles/card";

function CardLineups() {
  const { statistics, GetStatistcs, setShowScore, showScore } =
    useContext(UserContext);
  const [cartoes, setShowCatores] = useState(false);
  const [formacoes, setShowFormacao] = useState(false);

  const {
    biggest,
    cards,
    clean_sheet,
    failed_to_score,
    fixtures,
    goals,
    league,
    lineups,
    penalty,
    team,
    form,
  } = statistics;

  useEffect(() => {
    GetStatistcs();
  }, []);

  return (
    <CardStyled>
      <h2>Mostrar Statisticas</h2>
      {showScore ? <h2>Gols Sofridos:{goals.against.total.total}</h2> : null}
      {showScore ? <h2>Gols Feitos:{goals.for.total.total}</h2> : null}
    </CardStyled>
  );
}

export default CardLineups;
