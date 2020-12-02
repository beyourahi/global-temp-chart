import { Container } from "react-bootstrap";
import Navvy from "./components/Nav/Navvy";
import TempChart from "./components/Chart/TempChart";
import ChartButtons from "./components/ChartButtons/ChartButtons";
import { containerStyle, appStyles } from "./styles/appStyles";
import { ChartProvider } from "./context/chartContext";

//* App
const App = () => (
    <ChartProvider>
        {/*//? Navbar Component */}
        <Navvy />

        <div className={appStyles}>
            <Container className={containerStyle}>
                {/*//? Chart Component */}
                <TempChart />

                {/*//? Chart Buttons Component */}
                <ChartButtons />
            </Container>
        </div>
    </ChartProvider>
);

export default App;
