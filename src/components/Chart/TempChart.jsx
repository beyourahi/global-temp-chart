import Chart from "chart.js";
import { useEffect } from "react";

const TempChart = ({ data, options, chartType }) => {
    useEffect(() => {
        if (window.myCharts !== undefined) window.myCharts.destroy();
        window.myCharts = new Chart(document.getElementById("myChart"), {
            type: chartType,
            data: data,
            options: options,
        });
    });

    return (
        <div className="chart-container">
            <canvas id="myChart"></canvas>
        </div>
    );
};

export default TempChart;
