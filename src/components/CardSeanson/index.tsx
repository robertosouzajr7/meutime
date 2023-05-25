import React from "react";
import { useContext, useEffect, ChangeEvent } from "react";
import { UserContext } from "../../providers/user.Context";
import { CardStyled, ButtonStyled } from "../../styles/card";

function CardSeanson() {
  const { GetCountries, seanson, GetTeams, setYear, year } =
    useContext(UserContext);
  useEffect(() => {
    GetCountries();
  }, []);

  const HandleTextSeanson = (event: ChangeEvent<HTMLSelectElement>) => {
    setYear(event.target.value);
    localStorage.setItem("idSeanson", event.target.value);
  };

  return (
    <>
      {seanson ? (
        <>
          <CardStyled>
            <label htmlFor="seasons">
              Selecione uma Temporada
              <select id="seasons" value={year} onChange={HandleTextSeanson}>
                <option value={year}>Selecionar</option>
                {seanson.map((data, id) => (
                  <option value={data.year} key={id}>
                    {data.year}
                  </option>
                ))}
              </select>
            </label>
          </CardStyled>
          <ButtonStyled onClick={GetTeams}>Avançar</ButtonStyled>
        </>
      ) : null}
    </>
  );
}

export default CardSeanson;
