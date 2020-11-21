import { useReducer } from "react";
import { Container } from "react-bootstrap";
import Navvy from "./components/Nav/Navvy";
import TempChart from "./components/Chart/TempChart";
import ChartButtons from "./components/ChartButtons/ChartButtons";
import reducer, { initialState } from "./chartReducer";
import { containerStyle, appStyles } from "./styles/appStyles";

//* App
const App = () => {
    //// useReducer Hook to manage state
    const [state, dispatch] = useReducer(reducer, initialState);

    //// dispatch CHART TYPE to reducer function
    const handleType = type => dispatch({ type });

    //// UI
    return (
        <>
            {/*//? Navbar Component */}
            <Navvy />
            <div className={appStyles}>
                <Container className={containerStyle}>
                    {/*//? Chart Component */}
                    <TempChart
                        data={state.data}
                        options={state.options}
                        chartType={state.chartType}
                    />
                    {/*//? Chart Buttons Component */}
                    <ChartButtons handleType={handleType} />
                </Container>
            </div>
        </>
    );
};

export default App;
