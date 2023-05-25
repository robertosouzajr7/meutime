import React from "react";
import { useContext, useEffect, ChangeEvent } from "react";
import { UserContext } from "../../providers/user.Context";
import { CardStyled, ButtonStyled } from "../../styles/card";
import { iCountrie } from "../../interfaces";
function CardSelect() {
  const { setCounty, countries, country, GetCountries, Getleague } =
    useContext(UserContext);
  useEffect(() => {
    GetCountries();
  }, []);

  const HandleText = (event: ChangeEvent<HTMLSelectElement>) => {
    setCounty(event.target.value);
  };
  return (
    <>
      {countries ? (
        <>
          <CardStyled>
            <label htmlFor="list">
              Selecione um País
              <select id="list" value={country?.name} onChange={HandleText}>
                <option value={country.name}>Selecionar</option>
                {countries.map((country: iCountrie, index) => (
                  <option key={index} value={country.name}>
                    {country.name} | {country.code}
                  </option>
                ))}
              </select>
            </label>
          </CardStyled>
          <ButtonStyled onClick={() => Getleague()}>Ver Ligas</ButtonStyled>
        </>
      ) : (
        <>""</>
      )}
    </>
  );
}

export default CardSelect;
