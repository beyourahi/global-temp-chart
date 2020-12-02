import labels from "../fetchData.jsx";
import dataChunk from "../DATA.json";

//* Initial State
export const initialState = {
    chartType: "line",

    data: {
        labels: labels.xLabels,
        datasets: [
            {
                data: labels.yLabels,
                backgroundColor: "rgba(97, 218, 251, 0.2)",
                borderColor: "rgba(97, 218, 251, 1)",
                hoverBackgroundColor: "#1fd0ff",
                hoverBorderColor: "#1fd0ff",
                borderWidth: 2,
            },
        ],
    },

    options: {
        responsive: true,
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
};

//* ACTIONS
const ACTIONS = {
    bar: "bar",
    line: "line",
    radar: "radar",
    pie: "pie",
    polarArea: "polarArea",
    scatter: "scatter",
};

//* Reducer Function
const reducer = (state, action) => {
    //? Line
    if (action.type === ACTIONS.line) {
        return {
            chartType: "line",

            data: {
                labels: labels.xLabels,
                datasets: [
                    {
                        data: labels.yLabels,
                        backgroundColor: "rgba(97, 218, 251, 0.2)",
                        borderColor: "rgba(97, 218, 251, 1)",
                        hoverBackgroundColor: "#1fd0ff",
                        hoverBorderColor: "#1fd0ff",
                        borderWidth: 2,
                    },
                ],
            },

            options: {
                responsive: true,
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
        };
    }

    //? Bar
    else if (action.type === ACTIONS.bar) {
        return {
            chartType: "bar",

            data: {
                labels: labels.xLabels,
                datasets: [
                    {
                        data: labels.yLabels,
                        backgroundColor: "rgba(97, 218, 251, 0.2)",
                        borderColor: "rgba(97, 218, 251, 1)",
                        hoverBackgroundColor: "#1fd0ff",
                        hoverBorderColor: "#1fd0ff",
                        borderWidth: 2,
                    },
                ],
            },

            options: {
                responsive: true,
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
        };
    }

    //? Radar
    else if (action.type === ACTIONS.radar) {
        return {
            chartType: "radar",

            data: {
                labels: labels.xLabels,
                datasets: [
                    {
                        data: labels.yLabels,
                        backgroundColor: "rgba(97, 218, 251, 0.2)",
                        borderColor: "rgba(97, 218, 251, 1)",
                        hoverBackgroundColor: "#1fd0ff",
                        hoverBorderColor: "#1fd0ff",
                        borderWidth: 2,
                        pointHoverRadius: 8,
                    },
                ],
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
                spanGaps: true,
            },
        };
    }

    //? Pie
    else if (action.type === ACTIONS.pie) {
        return {
            chartType: "pie",

            data: {
                labels: labels.xLabels,
                datasets: [
                    {
                        data: labels.yLabels,
                        backgroundColor: "rgba(97, 218, 251, 0.2)",
                        borderColor: "rgba(97, 218, 251, 1)",
                        hoverBackgroundColor: "#1fd0ff",
                        hoverBorderColor: "#1fd0ff",
                    },
                ],
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
            },
        };
    }

    //? Polar Area
    else if (action.type === ACTIONS.polarArea) {
        return {
            chartType: "polarArea",

            data: {
                labels: labels.xLabels,
                datasets: [
                    {
                        data: labels.yLabels,
                        backgroundColor: "rgba(97, 218, 251, 0.2)",
                        borderColor: "rgba(97, 218, 251, 1)",
                        hoverBackgroundColor: "#1fd0ff",
                        hoverBorderColor: "#1fd0ff",
                    },
                ],
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
            },
        };
    }

    //? Scatter
    else if (action.type === ACTIONS.scatter) {
        return {
            chartType: "scatter",

            data: {
                datasets: [
                    {
                        data: dataChunk.map(data => ({
                            x: data.Year,
                            y: parseFloat(data.Glob) + 14,
                        })),
                        backgroundColor: "rgba(97, 218, 251, 1)",
                        hoverBackgroundColor: "#1fd0ff",
                        hoverBorderColor: "#1fd0ff",
                        pointHoverRadius: 10,
                        pointRadius: 6,
                        borderWidth: 2,
                    },
                ],
            },

            options: {
                responsive: true,
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
        };
    }

    //? Return Default State
    else return state;
};

export default reducer;
