import { useRef } from "react";
import { Button } from "react-bootstrap";

const ChartButtons = ({ handleType }) => {
    let type;

    const chartTypes = ["Bar", "Line", "Radar", "Pie", "Polar Area", "Scatter"];

    const btnRef = useRef([]);

    const handler = index => e => {
        type = btnRef.current[index].name;
        handleType(type !== "Polar Area" ? type.toLowerCase() : "polarArea");
    };

    return (
        <div className="chart-buttons d-flex flex-column">
            {chartTypes.map((chart, index) => (
                <Button
                    key={index}
                    ref={el => (btnRef.current[index] = el)}
                    name={chart}
                    variant="outline-info"
                    className="mb-4 text-white"
                    onClick={handler(index)}
                >
                    {chart + " Chart"}
                </Button>
            ))}
        </div>
    );
};
export default ChartButtons;
