import { Container } from "react-bootstrap";
import Navvy from "./components/Nav/Navvy";
import TempChart from "./components/Chart/TempChart";
import ChartButtons from "./components/ChartButtons/ChartButtons";
import dataset from "./DATA.json";
import { useState } from "react";

const App = () => {
    const [chartType, setchartType] = useState("line");
    const handleType = type => setchartType(type);

    let xLabels = [],
        yLabels = [];

    dataset.forEach(data => {
        xLabels.push(data.Year);
        yLabels.push(parseFloat(data.Glob) + 14);
    });

    const data = {
        labels: xLabels,
        datasets: [
            {
                data: yLabels,
                backgroundColor: "rgba(97, 218, 251, 0.2)",
                borderColor: "rgba(97, 218, 251, 1)",
                hoverBackgroundColor: "#1fd0ff",
                hoverBorderColor: "#1fd0ff",
                borderWidth: 2,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        fontColor: "white",
                        fontSize: 14,
                        callback: (value, index, values) => value + "°",
                    },
                },
            ],
            xAxes: [
                {
                    ticks: {
                        fontColor: "white",
                        fontSize: 14,
                    },
                },
            ],
        },
    };

    return (
        <>
            <Navvy />

            <div className="main bg-dark">
                <Container className="main-section p-0 d-flex justify-content-between align-items-center">
                    <TempChart
                        data={data}
                        options={options}
                        chartType={chartType}
                    />

                    <ChartButtons handleType={handleType} />
                </Container>
            </div>
        </>
    );
};

export default App;
