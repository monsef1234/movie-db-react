import React, { createContext, useContext, useEffect, useReducer } from "react";
import { Reducer } from "./Reducer";
const AppCtx = createContext();
const url = "https://www.omdbapi.com/?apikey=c1920adf&s=";
const initialState = {
  search: "batman",
  data: [],
  error: { show: false, msg: "" },
  loading: false,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const getData = async (searchValue) => {
    dispatch({ type: "LOADING_ON" });
    const reponse = await fetch(`${url}${searchValue}`);
    const data = await reponse.json();
    if (data.Response === "True") {
      dispatch({ type: "GET_DATA", payload: data.Search });
    } else {
      dispatch({ type: "ERROR", payload: data.Error });
    }
  };
  const searchHandler = (eo) => {
    dispatch({ type: "SEARCH", payload: eo });
  };
  useEffect(() => {
    getData(state.search);
  }, [state.search]);

  return (
    <AppCtx.Provider value={{ ...state, searchHandler }}>
      {children}
    </AppCtx.Provider>
  );
};
export const useGlobal = () => {
  return useContext(AppCtx);
};
export { AppProvider };
