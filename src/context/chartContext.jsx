import { createContext, useReducer } from "react";
import reducer, { initialState } from "./chartReducer";

const ChartContext = createContext();

export const ChartProvider = ({ children }) => {
    //// useReducer Hook to manage state
    const [state, dispatch] = useReducer(reducer, initialState);

    //// dispatch CHART TYPE to reducer function
    const handleType = type => dispatch({ type });

    return (
        <ChartContext.Provider
            value={{
                chartType: state.chartType,
                data: state.data,
                options: state.options,
                handleType,
            }}
        >
            {children}
        </ChartContext.Provider>
    );
};

export default ChartContext;
