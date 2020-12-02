import { useContext, useEffect } from "react";
import Chart from "chart.js";
import chartContainer from "../../styles/tempChartStyles";
import ChartContext from "../../context/chartContext";

//* Chart Component
const TempChart = () => {
    const chartContext = useContext(ChartContext);
    const { data, options, chartType } = chartContext;

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
