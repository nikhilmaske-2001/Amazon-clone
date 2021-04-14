import React, { createContext, useContext, useReducer } from "react";

// In video it says we don't need to exactly understand what this file code do
//Prepare the datalayer
export const StateContext = createContext();

// Wrap our app and provide the Date Layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);