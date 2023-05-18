import { createContext, useEffect, useState } from "react";
import { iChildren, iCountrie } from "../interfaces";
import { Api } from "../services/api";
import { Options } from "../services/api";
export interface iUserContext {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  HandleLogin: () => void;
  isLoged: boolean;
  setIsged: React.Dispatch<React.SetStateAction<boolean>>;
  countries: iCountrie[];
  setCountries: React.Dispatch<React.SetStateAction<iCountrie[]>>;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iChildren) => {
  const [token, setToken] = useState<string>("");
  const [isLoged, setIsged] = useState<boolean>(false);
  const [countries, setCountries] = useState<iCountrie[]>([]);
  const HandleLogin = async () => {
    await Api.get(`/countries`, Options)
      .then((res) => {
        setIsged(true);
        setCountries(res.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <UserContext.Provider
      value={{
        HandleLogin,
        token,
        setToken,
        isLoged,
        setIsged,
        countries,
        setCountries,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
