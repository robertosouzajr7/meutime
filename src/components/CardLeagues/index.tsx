import React from "react";
import { useContext, useEffect, ChangeEvent } from "react";
import { UserContext } from "../../providers/user.Context";
import { CardStyled, ButtonStyled } from "../../styles/card";

function CardLeagues() {
  const { GetCountries, leagues, league, GetSeanson, setTextLeague } =
    useContext(UserContext);
  useEffect(() => {
    GetCountries();
  }, []);

  const HandleTextLeague = (event: ChangeEvent<HTMLSelectElement>) => {
    setTextLeague(event.target.value);
  };
  return (
    <>
      {leagues ? (
        <>
          <CardStyled>
            <label htmlFor="league">
              Selecione a Liga
              <select
                id="league"
                value={league?.name}
                onChange={HandleTextLeague}
              >
                <option value={league.name}>Selecionar</option>
                {leagues.map((league) => (
                  <option key={league.league.id} value={league.league.name}>
                    {league.league.name}
                  </option>
                ))}
              </select>
            </label>
          </CardStyled>
          <ButtonStyled onClick={() => GetSeanson()}>Avançar</ButtonStyled>
        </>
      ) : null}
    </>
  );
}

export default CardLeagues;
