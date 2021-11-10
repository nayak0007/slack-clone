import React, { createContext, useContext, useReducer } from "react";

export const StateContext:any = createContext(null);

export const StateProvider = ({ reducer, initialState, children }: { reducer:any, initialState:any, children:any }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
