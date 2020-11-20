import { Container } from "react-bootstrap";
import Navvy from "./components/Nav/Navvy";
import TempChart from "./components/Chart/TempChart";
import ChartButtons from "./components/ChartButtons/ChartButtons";
import DATA from "./DATA.json";
import { useState } from "react";

const App = () => {
    const [chartType, setchartType] = useState("line");
    const handleType = type => setchartType(type);

    return (
        <>
            <Navvy />

            <div className="main bg-dark">
                <Container className="main-section p-0 d-flex justify-content-between align-items-center">
                    <TempChart dataset={DATA} chartType={chartType} />
                    <ChartButtons handleType={handleType} />
                </Container>
            </div>
        </>
    );
};

export default App;
