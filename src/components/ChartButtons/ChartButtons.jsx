import { Button } from "react-bootstrap";

const chartTypes = [
    "Bar",
    "Line",
    "Radar",
    "Pie",
    "Polar Area",
    "Bubble",
    "Scatter",
    "Area",
];

const ChartButtons = () => (
    <div className="chart-buttons d-flex flex-column">
        {chartTypes.map(chart => (
            <Button variant="outline-info" className="mb-3 text-white">
                {chart + " Chart"}
            </Button>
        ))}
    </div>
);
export default ChartButtons;
