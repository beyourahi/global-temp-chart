import { useEffect } from "react";
import Chart from "chart.js";
import chartContainer from "../../styles/tempChartStyles";

//* Chart Component
const TempChart = ({ data, options, chartType }) => {
    useEffect(() => {
        //? remove previous chart if exists
        if (window.myCharts !== undefined) window.myCharts.destroy();

        //? create new chart
        window.myCharts = new Chart(document.getElementById("myChart"), {
            type: chartType,
            data: data,
            options: options,
        });
    });

    //// UI
    return (
        <div className={chartContainer}>
            {/*//? chart canvas */}
            <canvas id="myChart"></canvas>
        </div>
    );
};

export default TempChart;
