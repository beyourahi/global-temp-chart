import React, { createContext, useReducer } from "react";

const ChartContext = createContext();

const ACTION = {};

const reducer = (state, action) => {
    //
};

export const ChartState = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, "line");

    return (
        <ChartContext.Provider value={state}>{children}</ChartContext.Provider>
    );
};

export default ChartContext;
