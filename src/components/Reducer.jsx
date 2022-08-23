import React from "react";

export const Reducer = (state, action) => {
  if (action.type === "LOADING_ON") {
    return { ...state, loading: true };
  }
  if (action.type === "GET_DATA") {
    return {
      ...state,
      loading: false,
      data: action.payload,
      error: { show: false, msg: "" },
    };
  }
  if (action.type === "ERROR") {
    return {
      ...state,
      loading: true,
      data: [],
      error: { show: true, msg: action.payload },
    };
  }
  if (action.type === "SEARCH") {
    return {
      ...state,
      search: action.payload.target.value,
    };
  }
  return state;
};
