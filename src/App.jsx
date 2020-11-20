import { Container } from "react-bootstrap";
import Navvy from "./components/Nav/Navvy";
import TempChart from "./components/Chart/TempChart";
import ChartButtons from "./components/ChartButtons/ChartButtons";
import DATA from "./DATA.json";

const App = () => (
    <>
        <Navvy />

        <div className="main bg-dark">
            <Container className="main-section p-0 d-flex justify-content-between align-items-center">
                <TempChart dataset={DATA} />
                <ChartButtons />
            </Container>
        </div>
    </>
);

export default App;
