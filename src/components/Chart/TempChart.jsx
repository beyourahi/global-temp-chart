import Chart from "chart.js";
import { useEffect } from "react";

const TempChart = ({ dataset }) => {
    let xLabels = [],
        yLabels = [];

    dataset.forEach(data => {
        xLabels.push(data.Year);
        yLabels.push(parseFloat(data.Glob) + 14);
    });

    useEffect(() => {
        const ctx = document.getElementById("myChart");

        new Chart(ctx, {
            type: "line",
            data: {
                labels: xLabels,
                datasets: [
                    {
                        label: "Global Average Temperature",
                        data: yLabels,
                        backgroundColor: "rgba(97, 218, 251, 0.2)",
                        borderColor: "rgba(97, 218, 251, 1)",
                        hoverBackgroundColor: "#1fd0ff",
                        hoverBorderColor: "#1fd0ff",
                        borderWidth: 2,
                    },
                ],
            },
            options: {
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
            },
        });
    });

    return (
        <div class="chart-container">
            <canvas id="myChart"></canvas>
        </div>
    );
};

export default TempChart;
