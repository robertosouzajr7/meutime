import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/user.Context";
import { CardStyled } from "../../styles/card";
import Chart from "react-apexcharts";
function CardLineups() {
  const { statistics } = useContext(UserContext);
  const { fixtures, goals, lineups } = statistics;
  const played = statistics.lineups.map((item: any) => item.played);
  const max = played.reduce(function (a, b) {
    return Math.max(a, b);
  }, -Infinity);
  const formation = lineups.filter((formate: any) => formate.played === max);

  const { against } = goals;
  const { minute } = against;
  const categories = Object.keys(minute);
  const options = {
    chart: {
      id: "bar",
    },
    xaxis: {
      categories: categories,
    },
  };

  const series = [
    {
      name: "Gols Marcados",
      type: "line",
      data: [
        statistics.goals.against.minute["0-15"].total,
        statistics.goals.against.minute["16-30"].total,
        statistics.goals.against.minute["31-45"].total,
        statistics.goals.against.minute["46-60"].total,
        statistics.goals.against.minute["61-75"].total,
        statistics.goals.against.minute["76-90"].total,
      ],
    },
    {
      name: "% Tempo de Jogo",
      type: "column",
      data: [
        statistics.goals.against.minute["0-15"].percentage,
        statistics.goals.against.minute["16-30"].percentage,
        statistics.goals.against.minute["31-45"].percentage,
        statistics.goals.against.minute["46-60"].percentage,
        statistics.goals.against.minute["61-75"].percentage,
        statistics.goals.against.minute["76-90"].percentage,
      ],
    },
  ];

  return (
    <CardStyled>
      <h2>Estatísticas:</h2>
      <table className="table__campanha">
        <th>Campanha</th>
        <th>Em casa</th>
        <th>Fora</th>
        <th>Total</th>
        <tbody>
          <tr>
            <td>Jogos</td>
            <td>{fixtures.played.home}</td>
            <td>{fixtures.played.away}</td>
            <td>{fixtures.played.total}</td>
          </tr>
          <tr>
            <td>Vitorias</td>
            <td>{fixtures.wins.home}</td>
            <td>{fixtures.wins.away}</td>
            <td>{fixtures.wins.total}</td>
          </tr>
          <tr>
            <td>Derrotas</td>
            <td>{fixtures.loses.home}</td>
            <td>{fixtures.loses.away}</td>
            <td>{fixtures.loses.total}</td>
          </tr>
          <tr>
            <td>Empates</td>
            <td>{statistics.fixtures.draws.home}</td>
            <td>{statistics.fixtures.draws.away}</td>
            <td>{statistics.fixtures.draws.total}</td>
          </tr>
        </tbody>
      </table>
      <table className="table__goals">
        <tbody>
          <tr>
            <td>Gols</td>
            <td>{goals.for.total.home}</td>
            <td>{goals.for.total.away}</td>
            <td>{goals.for.total.total}</td>
          </tr>
          <tr>
            <td>Media/Gols</td>
            <td>{goals.for.average.home}</td>
            <td>{goals.for.average.away}</td>
            <td>{goals.for.average.total}</td>
          </tr>
          <tr>
            <td>Gols Sofridos</td>
            <td>{goals.against.total.home}</td>
            <td>{goals.against.total.away}</td>
            <td>{goals.against.total.total}</td>
          </tr>
          <tr>
            <td>Media/Gol-Sofridos</td>
            <td>{goals.against.average.home}</td>
            <td>{goals.against.average.away}</td>
            <td>{goals.against.average.total}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <table className="table__formation">
          <th>Esquema Tático</th>
          <th>Formação</th>
          <th>Jogos</th>
          <th></th>
          <tbody>
            {formation.map((formacao: any) => (
              <tr>
                <td>Mais utilizada</td>
                <td>{formacao.formation}</td>
                <td>{formacao.played}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Chart
        options={options}
        series={series}
        width={600}
        key={series.length}
        ref={null}
      />
    </CardStyled>
  );
}

export default CardLineups;
