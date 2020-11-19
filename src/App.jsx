import Navvy from "./components/Nav/Navvy";
import TempChart from "./components/Chart/TempChart";
import ChartButtons from "./components/ChartButtons/ChartButtons";
import DATA from "./DATA.json";

const App = () => (
    <>
        <Navvy />

        <div className="main bg-secondary">
            <TempChart dataset={DATA} />
            <ChartButtons />
        </div>
    </>
);

export default App;
