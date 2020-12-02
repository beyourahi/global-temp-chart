import { useContext, useRef } from "react";
import { Button } from "react-bootstrap";
import ChartContext from "../../context/chartContext";
import { chartButtons, button, variant } from "../../styles/chartButtonsStyles";

//* Chart Buttons component
const ChartButtons = () => {
    const chartContext = useContext(ChartContext);
    const { handleType } = chartContext;

    //// variable declarations
    let type;
    const btnRef = useRef([]);
    const chartTypes = ["Bar", "Line", "Radar", "Pie", "Polar Area", "Scatter"];

    //// chart type handler
    const handler = index => e => {
        type = btnRef.current[index].name;
        handleType(type !== "Polar Area" ? type.toLowerCase() : "polarArea");
    };

    //// UI
    return (
        <div className={chartButtons}>
            {/*//? mapping through all chart types */}
            {/*//? make a button for each chart type */}
            {chartTypes.map((chart, index) => (
                <Button
                    key={index}
                    ref={el => (btnRef.current[index] = el)}
                    name={chart}
                    variant={variant}
                    className={button}
                    onClick={handler(index)}
                >
                    {chart + " Chart"}
                </Button>
            ))}
        </div>
    );
};
export default ChartButtons;
