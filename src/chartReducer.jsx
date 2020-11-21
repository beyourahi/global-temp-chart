import labels from "./fetchData.jsx";

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
            ...state,
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
            ...state,
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
            ...state,
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
        };
    }

    //? Pie
    else if (action.type === ACTIONS.pie) {
        return {
            ...state,
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
        };
    }

    //? Polar Area
    else if (action.type === ACTIONS.polarArea) {
        return {
            ...state,
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
        };
    }

    //? Scatter
    else if (action.type === ACTIONS.scatter) {
        return {
            ...state,
            chartType: "scatter",

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
